import { FormInput } from 'pages/auth/components/Form/Input'
import { Box } from '@mui/material'
import { CustomDatePicker } from 'components/CustomDatePicker'

export const selectInputType = ({ inputType, subFields, name, label, type, rules }) => {
  switch (inputType) {
    case 'multipleTextfield':
      return (
        // Refactor into a new component || isolate styles
        <Box sx={{ width: '100%', display: 'flex', gap: '0.5rem' }}>
          { subFields.map(({ name, label, type, rules }) =>
            <FormInput
              key={name}
              label={label}
              name={name}
              rules={rules}
              type={type}
            />
          )}
        </Box>
      )

    case 'textfield':
      return (
        <FormInput
          fullWidth
          key={name}
          label={label}
          name={name}
          type={type}
          rules={rules}
        />
      )

    case 'datePicker':
      return (
        <CustomDatePicker key={name} name={name} label={label} rules={rules} />
      )

    default:
      return (
        <FormInput
          fullWidth
          key={name}
          label={label}
          name={name}
          type={type}
          rules={rules}
        />
      )
  }
}
