import { Box } from '@mui/material'
import { CustomDatePicker } from 'components/CustomDatePicker'
import { PhoneNumberInput } from 'components/PhoneNumberInput'
import { FormInput } from '../../components/Form/Input'
import { Badge, Home, Phone } from '@mui/icons-material'

export const PersonalDataSection = () => {
  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', gap: '0.5rem' }}>
          <FormInput
            autoFocus
            inputAdornment={<Badge color='grey' />}
            key='firstname'
            label='First Name'
            name='firstName'
            rules={{ required: 'This field is required' }}
            type='text'
          />

          <FormInput
            inputAdornment={<Badge color='grey' />}
            key='lastname'
            label='Last Name'
            name='lastName'
            rules={{ required: 'This field is required' }}
            type='text'
          />
      </Box>

      <FormInput
        fullWidth
        inputAdornment={<Home color='grey' />}
        key='address'
        label='Address'
        name='address'
        rules={{ required: 'This field is required ' }}
        type='text'
      />

      <CustomDatePicker
        key='birthdate'
        label='Birthdate'
        name='birthdate'
        rules={{ required: 'This field is required' }}
      />

      <PhoneNumberInput
        defaultCountry={'ve'}
        inputAdorment={<Phone color='grey' />}
        key='phoneNumber'
        name='phoneNumber'
        regionsAvailable={['south-america', 'central-america', 'carribean']}
        rules={{ required: 'This field is required' }}
      />
    </>
  )
}
