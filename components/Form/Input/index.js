import { ErrorMessage } from 'components/Error/ErrorMessage'
import { useFormContext } from 'react-hook-form'

import styles from './styles'

export function InputControl ({ label, type, placeholder, name, rules, autoComplete }) {
  const { register, formState: { errors } } = useFormContext()

  return (
    <>
      <div>
        <label>{label}</label>
        <input
          autoFocus
          autoComplete={autoComplete || 'off' }
          type={type}
          placeholder={placeholder}
          name={name}
          className={errors[name] && 'on-error'}
          {...register(name, rules)}
        />
        { errors[name] && <ErrorMessage message={errors[name].message} />}

      </div>
      <style jsx>{styles}</style>
    </>
  )
}
