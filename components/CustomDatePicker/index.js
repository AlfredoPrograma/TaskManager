import { useState, useEffect } from 'react'
import { DatePicker } from '@mui/lab'
import { TextField } from '@mui/material'
import { useFormContext } from 'react-hook-form'

export const CustomDatePicker = ({ name, label, rules }) => {
  const [date, setDate] = useState(new Date())
  const { setValue, register, getValues, formState: { errors } } = useFormContext()
  const currentValue = getValues(name)

  const handleChange = (value) => setValue(name, value, { shouldValidate: true, shouldDirty: true })

  useEffect(() => {
    register(name, rules)
  }, [register])

  useEffect(() => {
    setDate(currentValue || null)
  }, [setDate, currentValue])

  return (
    <DatePicker
      views={['year', 'month', 'day']}
      inputFormat='DD-MM-YYYY'
      openTo='year'
      label={label}
      value={date}
      onChange={handleChange}
      renderInput={(params) =>
        <TextField
          {...params}
          FormHelperTextProps={{ style: { margin: 0 } }}
          value={date}
          inputProps={{ ...params.inputProps, readOnly: true }}
          error={!!errors[name]?.message}
          helperText={errors[name]?.message}
        />
      }
    />
  )
}
