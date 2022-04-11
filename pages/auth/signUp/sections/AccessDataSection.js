import { useFormContext } from 'react-hook-form'
import { FormInput } from '../../components/Form/Input'
import { Email, Key } from '@mui/icons-material'

export const AccessDataSection = () => {
  const { getValues } = useFormContext()

  const plainPassword = getValues('password')
  const passwordsAreSame = (repeatedPassword) => repeatedPassword === plainPassword || 'Passwords must be the same'

  return (
    <>
      <FormInput
        autoFocus
        fullWidth
        key='email'
        name='email'
        label='E-mail'
        type='text'
        rules={{
          required: 'This field is required',
          pattern: {
            message: 'Invalid E-mail format',
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g // eslint-disable-line
          }
        }}
        inputAdornment={<Email color='grey' />}
      />

      <FormInput
        fullWidth
        key='password'
        name='password'
        label='Password'
        type='password'
        rules={{ required: 'This field is required' }}
        inputAdornment={<Key color='grey' />}
      />

      <FormInput
        fullWidth
        key='repeatedPassword'
        name='repeatedPassword'
        label='Repeat password'
        type='password'
        rules={{ required: 'This field is required', validate: passwordsAreSame }}
        inputAdornment={<Key color='grey' />}
      />

    </>
  )
}
