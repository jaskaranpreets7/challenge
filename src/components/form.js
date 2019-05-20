import React, {Component} from 'react'
import './profile.css';

const capitalizeFirstLetter = (string)=> {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

class Form extends Component { 

    constructor(props){
        super(props);

        this.formMessageRef = React.createRef();
    }
    
    removeInvalidClasses = (requiredFields)=> {
        requiredFields.forEach((element) => {
        element.classList.remove('profile-form__field--invalid');
        });

        this.formMessageRef.current.innerHTML = '';
        this.formMessageRef.current.classList.remove('profile-form__message--invalid');
    }

    addInvalidClassesAndValidationMessage = (emptyFields) => {
        const emptyFieldNames = emptyFields.map((element) => element.name);

        this.formMessageRef.current.classList.add('profile-form__message--invalid');
        this.formMessageRef.current.innerHTML = capitalizeFirstLetter(`${emptyFieldNames.join(', ')} can not be blank`);
    }

    showFormSuccess = () => {
        this.formMessageRef.current.innerHTML = 'Form submitted!';
    }

    handleFormSubmit = (e) =>{
        e.preventDefault();

        const requiredFields = [
            e.target.name,
            e.target.gender,
            e.target.email,
            e.target.phone
          ];
      
        const emptyFields = requiredFields.filter((element) => (
            !Boolean(element.value)
          ));
      
        this.removeInvalidClasses(requiredFields);
      
        if (emptyFields.length) {
            this.addInvalidClassesAndValidationMessage(emptyFields);
      
            emptyFields.forEach((element) => {
              element.classList.add('profile-form__field--invalid');
            });
        } else {
            this.showFormSuccess();
            this.props.handleFormSubmit(e)
        }
    }

    handleChange = (e) =>{
        this.props.handleChange(e)
    }
   
render(){
    return (
        <div>
            <form onSubmit={this.handleFormSubmit}>
              <label className="profile-form__row">
                Name:
                <input
                  className="profile-form__field" 
                  name="name" 
                  type="text"
                  onChange={this.handleChange}
                />
              </label>
    
              <label className="profile-form__row">
                Gender:
                <select
                  onChange={this.handleChange}
                  className="profile-form__field profile-form__select" 
                  name="gender"
                >
                  <option value="unspecified">Unspecified</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </label>
    
              <label className="profile-form__row">
                Email:
                <input
                  onChange={this.handleChange}
                  className="profile-form__field"
                  name="email"
                  type="text"
                />
              </label>
    
              <label className="profile-form__row">
                Phone:
                <input
                  onChange={this.handleChange}
                  className="profile-form__field"
                  name="phone"
                  type="text"
                />
              </label>
    
              <div className="profile-form__row">
                <button type="Submit"> Save</button>
              </div>
              <div className="profile-form__row">
                <span
                    ref={this.formMessageRef}
                    className="profile-form__message"
                />
              </div>
            </form>
          
        </div>
      )

    }

}

export default Form;