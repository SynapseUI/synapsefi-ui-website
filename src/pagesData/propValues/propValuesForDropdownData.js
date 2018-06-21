export default [
  {
    name: 'value',
    type: 'String or Array',
    description: `The selected value of the Dropdown component. Menu will highlight this value according to the selection's key.
      * Note: The prop value "multiselect" requires "value" to be in the form of an array and string otherwise.
    `
  },
  {
    name: 'propName',
    type: 'String',
    description: 'The identifier of the component, used for onChange events and error checking.'
  },

  {
    name: 'className',
    type: 'String',
    description: `Adds an additional classname to this component.`
  },
  {
    name: 'styles',
    type: 'String',
    description: `Inline styling.`
  },
  {
    name: 'label',
    type: 'String',
    description: `Creates a <Label> on the left of the component. If not set then a <Label> wont be created. By default the width of the <Label> is set to 25%, if you would like to set the width you can use labelWidth or use the classname 'label-description' for class overriding.`
  },

  {
    name: 'description',
    type: 'String',
    description: 'Description underneath <Label>, will only be rendered if label is defined.'
  },

  {
    name: 'options',
    type: 'Array',
    description: `A list of each list item in the dropdown menu. Must have a key and text value.
    
      i.e. { key: 'SOME_KEY', text: 'Some text ...'}
    `
  },

  {
    name: 'placeholder',
    type: 'String',
    description: 'Placeholder text for Input, Textarea and Dropdown.'
  },

  {
    name: 'disabled',
    type: 'String',
    description: 'Will style the component with a disabled status.'
  },

  {
    name: 'onChange',
    type: 'Function',
    description: `Used for updating, gives the element, value and propName of the Dropdown component.

    i.e. onChange={(e, value, propName) => this.setState({ [propName]: value })}
    `
  },
  {
    name: 'searchable',
    type: 'Boolean',
    description: 'The Dropdown bar will become an input field, typing in the field will filter the menu list.'
  },
  {
    name: 'multiselect',
    type: 'Boolean',
    description: `Selecting an option will add to the value prop, clicking the option again will remove it.
Values picked will appear in the Dropdown bar seperated by commas. An "All" option is added for selecting every value, dropdown bar will display "All".
     
    * Note: The prop "value" must be an array.`
  },
  {
    name: 'renderOptionItem',
    type: 'Function',
    description: `Custom menu item rendering, the function is given an item as an object with the text and key values. i.e. { key: 'SOME_KEY', text: 'Some text ...'}`
  }
]