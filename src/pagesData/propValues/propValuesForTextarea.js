export default [
  {
    name: 'value',
    type: 'String',
    description: `The value of the Textarea component.`
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
    description: `A description will be added to the Label component`
  },

  {
    name: 'placeholder',
    type: 'String',
    description: 'Placeholder text for Textarea'
  },

  {
    name: 'disabled',
    type: 'String',
    description: 'Will style the component with a disabled status.'
  },

  {
    name: 'onChange',
    type: 'Function',
    description: `Used for updating, gives the element, value and propName of the Textarea component.

    i.e. onChange={(e, value, propName) => this.setState({ [propName]: value })}
    `
  },
]