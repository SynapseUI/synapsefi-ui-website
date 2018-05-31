export default [
  {
    name: 'formValues',
    type: 'Object',
    description: `The slice of data Form will be editing, i.e. formValues={ this.state }`
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
  },

  {
    name: 'data',
    type: 'Array',
    description: `The Form component will iterate through this list and will create an element based on given type, for example:
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
    name: 'formClassName',
    type: 'String',
    description: 'Classname that will be applied to the <form> tag'
  },

  {
    name: 'rowClassName',
    type: 'String',
    description: `Classname that will be applied to each component. (Note: the value of className in 'data' has a higher priority than 'rowClassName')`
  },

  {
    name: 'onChange',
    type: 'Function',
    description: `Callback applied to each component and triggers during an onChange event, parameters given are element, value, and propName in that order.
      
    i.e. onChange={(e, value, propName) => this.setState({ [propName]: value })}
    `
  },

  {
    name: 'onChangeCollection',
    type: 'Object',
    description: `onChangeCollection is for when you would like to have a more specific onChange event for each component. Can be type specific or propName specific. ('default' essentially functions as a normal onChange event.)
    
    i.e. onChangeCollection={{
        TYPE_DROPDOWN: this.updateDropdown,
        email: this.updateEmail,
        default: this.updateField
      }}
    `
  }
  
]