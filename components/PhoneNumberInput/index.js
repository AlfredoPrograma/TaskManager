import { useEffect, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import MuiPhoneNumber from 'material-ui-phone-number'
import validator from 'validator'

export const PhoneNumberInput = ({ countriesAvailable, regionsAvailable, defaultCountry, name, rules, inputAdorment }) => {
  const { register, getValues, setValue, formState: { errors } } = useFormContext()
  const [phoneNumber, setPhoneNumber] = useState('')
  const currentPhoneNumber = getValues(name)

  const validatePhoneNumber = (phone) => validator.isMobilePhone(phone) || 'Invalid phone number'
  const handleChange = (value) => setValue(name, value, { shouldDirty: true, shouldValidate: true })

  useEffect(() => {
    register(name, { ...rules, validate: validatePhoneNumber })
  }, [register])

  useEffect(() => {
    setPhoneNumber(currentPhoneNumber || '')
  }, [currentPhoneNumber, setPhoneNumber])

  return (
    <MuiPhoneNumber
      variant='outlined'
      InputProps={{ endAdornment: inputAdorment }}
      onlyCountries={countriesAvailable}
      regions={regionsAvailable}
      countryCodeEditable={false}
      value={phoneNumber}
      onChange={handleChange}
      defaultCountry={defaultCountry}
      FormHelperTextProps={{ style: { margin: 0 } }}
      helperText={ errors[name]?.message }
      error={!!errors[name]?.message}
    />
  )
}
