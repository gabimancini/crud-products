import { FieldProps, getIn } from 'formik'
import { TextFieldProps } from '@mui/material/TextField'
import TextField from '@mui/material/TextField';
export const FieldForm: React.FC<FieldProps & TextFieldProps> = props => {
    const { error, helperText, field,  ...rest } = props
    const isTouched = getIn(props.form.touched, props.field.name)
  const errorMessage = getIn(props.form.errors, props.field.name)

  return (
    <TextField
    required
      variant="outlined"
      error={error ?? Boolean(isTouched && errorMessage)}
      helperText={helperText ?? ((isTouched && errorMessage) ? errorMessage : undefined)}
      {...rest}
      {...field}
    />
  )
}
