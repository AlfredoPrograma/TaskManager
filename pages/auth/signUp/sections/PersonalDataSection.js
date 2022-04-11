import { Box } from '@mui/material'
import { CustomDatePicker } from 'components/CustomDatePicker'
import { PhoneNumberInput } from 'components/PhoneNumberInput'
import { FormInput } from '../../components/Form/Input'

export const PersonalDataSection = () => {
  return (
    <>
      <Box sx={{ width: '100%', display: 'flex', gap: '0.5rem' }}>
          <FormInput
            autoFocus
            key='firstname'
            label='First Name'
            name='firstname'
            rules={{ required: 'This field is required' }}
            type='text'
          />

          <FormInput
            key='lastname'
            label='Last Name'
            name='lastname'
            rules={{ required: 'This field is required' }}
            type='text'
          />
      </Box>

      <FormInput
        fullWidth
        key='address'
        name='address'
        label='Address'
        type='text'
        rules={{ required: 'This field is required ' }}
      />

      <CustomDatePicker
        key='birthdate'
        label='Birthdate'
        name='birthdate'
        rules={{ required: 'This field is required' }}
      />

      <PhoneNumberInput
        key='phoneNumber'
        name='phoneNumber'
        defaultCountry={'ve'}
        regionsAvailable={['south-america', 'central-america', 'carribean']}
        rules={{ required: 'This field is required' }}
      />
    </>
  )
}
