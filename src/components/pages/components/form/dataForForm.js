const [
  TYPE_INPUT,
  TYPE_TEXTAREA,
  TYPE_CHECKBOXGROUP,
  TYPE_RADIOGROUP,
  TYPE_DROPDOWN,
  OTHER
] = [
  'TYPE_INPUT',
  'TYPE_TEXTAREA',
  'TYPE_CHECKBOXGROUP',
  'TYPE_RADIOGROUP',
  'TYPE_DROPDOWN',
  'OTHER'
];

export default [
  {
    formType: 'TYPE_INPUT',
    autofocus: true,
    propName: 'email',
    label: 'Email',
    placeholder: 'Enter User Email',
  },

  {
    formType: 'TYPE_INPUT',
    propName: 'username',
    label: 'User Name',
    placeholder: 'Enter a User Name',
  },

  {
    formType: 'TYPE_INPUT',
    propName: 'website',
    label: 'Website',
    placeholder: 'Enter a Website',
    disabled: true,
  },

  {
    formType: 'TYPE_INPUT',
    propName: 'amount',
    currency: true,
    inputType: 'number',
    label: 'Amount',
    placeholder: 'Enter an Amount',
  },

  {
    formType: 'TYPE_TEXTAREA',
    propName: 'description',
    label: 'Description',
    placeholder: 'Enter a Description',
    description: 'Enter a Description',
    disabled: true,
  },

  {
    formType: 'TYPE_RADIOGROUP',
    propName: 'light_switch',
    label: 'Light Switch',
    options: [
      { key: 'ON', text: 'On' },
      { key: 'OFF', text: 'Off' }
    ],
  },

  {
    formType: 'TYPE_CHECKBOXGROUP',
    propName: 'card_preferences',
    label: 'Card Preferences',
    options: [
      { key: 'CREDIT', text: 'Credit' },
      { key: 'DEBIT', text: 'Debit' }
    ],
  },

  {
    formType: 'TYPE_DROPDOWN',
    label: 'Location: ',
    placeholder: 'Airports',
    propName: 'location',
    options: [
      { key: 'SFO', text: 'San Francisco' },
      { key: 'JFK', text: 'John F. Kennedy Airport' },
      { key: 'ORD', text: 'O\'Hare International Airport' }
    ],
  },
  
]