import { TextField } from '@mui/material'
import { useFormContext } from 'react-hook-form'

export function FormInput ({ label, type, placeholder, name, rules, fullWidth, variant, autoFocus }) {
  const { register, formState: { errors } } = useFormContext()

  return (
    <>
      <TextField
        autoFocus={autoFocus}
        autoComplete='off'
        fullWidth={fullWidth}
        variant={variant ?? 'outlined'}
        type={ type ?? 'text'}
        placeholder={placeholder}
        name={name}
        label={label}
        helperText={ errors[name]?.message }
        FormHelperTextProps={{ style: { margin: 0 } }}
        error={!!errors[name]?.message}
        {...register(name, rules)}
      />
    </>
  )
}
