import { Button } from '@mui/material'

export const FormButton = ({ onClick, children }) => {
  return (
    <Button
      sx={{ padding: '0.75rem' }}
      type='submit'
      onClick={onClick}
      size='large'
      margin='normal'
      fullWidth
      variant='contained'
    >
      { children }
    </Button>
  )
}
