import { useState, useEffect } from 'react'
import { DatePicker } from '@mui/lab'
import { TextField } from '@mui/material'
import { useFormContext } from 'react-hook-form'
import { CalendarMonth } from '@mui/icons-material'

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
      OpenPickerButtonProps={{ style: { color: '#a4a4a4', margin: '0 auto', padding: '0' } }}
      views={['year', 'month', 'day']}
      inputFormat='YYYY-MM-DD'
      openTo='year'
      label={label}
      value={date}
      onChange={handleChange}
      components={{ OpenPickerIcon: CalendarMonth }}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            FormHelperTextProps={{ style: { margin: 0 } }}
            value={date}
            inputProps={{ ...params.inputProps, readOnly: true }}
            error={!!errors[name]?.message}
            helperText={errors[name]?.message}
          />
        )
      }}
    />
  )
}
