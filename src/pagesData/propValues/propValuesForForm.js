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
  },

  {
    name: 'errors',
    type: 'Object',
    description: 'Default set of errors to go into Form.'
  },

  {
    name: 'displayErrorsInstantly',
    type: 'Boolean',
    description: 'Will ignore the wait for submission attempt and will render the errors instantly.'
  },

  {
    name: 'additionalButtons',
    type: 'Array',
    description: `Will add additional buttons to the left of the Submit button.
    
      i.e. additionalButtons={
        [
          {
            style: 'tertiary',
            text: 'Cancel',
            action: () => console.log('cancel')
          }
        ]
      }
    `
  },

  {
    name: 'submitButtonText',
    type: 'String',
    description: 'Custom text for the Submit button, defaults to "Submit".'
  },

  {
    name: 'customFooter',
    type: 'Function (React Component)',
    description: `Replaces the Submit button and will have access to the data entry, errors and handleSubmit in props.
    
    i.e. customFooter={<CustomFooter/>}

    // CustomFooter.js

    const CustomFooter = (props) => {
      const { item, error } = props;

      return (
        <div>
          <button onClick={props.handleSubmit}>Custom Button</button>
        </div>
      )
    }
    
    export default CustomFooter;

    `
  }
  
]