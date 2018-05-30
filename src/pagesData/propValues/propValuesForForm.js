export default [
  {
    name: 'data',
    type: 'Array',
    description: `The Form component will iterate this list and will create an element based on given type, for example:
    data: [
            {
              formType: 'TYPE_INPUT',
              propName: 'username',
              label: 'User Name',
              placeholder: 'Enter a User Name',
            }
          ]`
  },

  {
    name: 'formValues',
    type: 'Object',
    description: `The slice of data Form will be editing, i.e. 'this.state'`
  },

  {
    name: 'handleSubmit',
    type: 'Function',
    description: `Callback function that will trigger when submit button is clicked`
  },

  {
    name: 'validation',
    type: 'Function',
    description: `Callback that is called when error checking.
Needs to return an Object of strings matching their respective state values, for example:
      errors = {
          username: "User name is a required field"
      }
    `
  }
]