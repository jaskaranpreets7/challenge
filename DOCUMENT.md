<!-- Task 1 -->
- Making ProfileForm into controlled component

- Added method to get the value from the form .. handleChange on profile.js
  1. Don't wanted to write 4 times handlechange for every input field.
  2. That is why used one handle function with bracket notation

- Removed refs from the component 
  1. Don't wanted to use ref's in profile component

- Extracetd the form fields and re-used the ref's validation from the profile into a new Form component

- Thinking about Edit component
 1. Can store the profile details and make a edit button. By clicking the edit button we can open the edit component with the profile which is need to edit.
 2. thinking of different way to implement edit component for example using redux

- Other way to do things
 1. Needed more clearity what need to be done with edit component
 2. Want to do the unidirectional flow of data from grandparent(edit or new) components to parent(profile) components to child(form) components
 3. I made the profile as a parent of form component in which the profile is managing the state. In future we can post the data or edit the data through profile component if need.
 4. thinking about the form validation without using ref's
