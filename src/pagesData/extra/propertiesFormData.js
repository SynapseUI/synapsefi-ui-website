export default [
  {
    name: 'formType',
    type: 'String',
    description: `The value of formType defines the component of the data entry. Types include:

        'TYPE_INPUT': <Input>
        'TYPE_TEXTAREA': <Textarea>
        'TYPE_CHECKBOXGROUP': <CheckboxGroup>
        'TYPE_RADIOGROUP': <RadioGroup>
        'TYPE_DROPDOWN': <Dropdown>
  
* Any other string for formType will pop off and render a child from the Form's props.children (a.k.a. components nested within Form). This can be a handy way to squeeze a child component within the Form without having it be appended to the end by default.`
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
    description: `For Radio Group, Checkbox Group and Dropdown. A list of possible options (see one of these component props for more detail)`
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
    name: 'onClick, onFocus, onBlur, etc.',
    type: 'Function',
    description: `React events that will be given the element, value and propName in the respective order.
    
      i.e. onChange={(e, value, propName) => console.log(e, value, propName)}
    `
  },

  {
    name: 'props',
    type: 'Anything',
    description: 'All other values of an data entry will be passed down as props, i.e. autofocus.'
  }

]