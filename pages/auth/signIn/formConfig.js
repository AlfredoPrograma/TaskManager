export const formConfig = [
  {
    name: 'email',
    label: 'E-mail',
    type: 'text',
    rules: {
      required: 'This field is required',
      pattern: {
        message: 'Invalid E-mail format',
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g // eslint-disable-line
      }
    }
  },

  {
    name: 'password',
    label: 'Password',
    type: 'password',
    rules: {
      required: 'This field is required'
    }
  }
]
