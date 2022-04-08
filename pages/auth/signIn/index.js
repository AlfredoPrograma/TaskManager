import { FormProvider, useForm } from 'react-hook-form'
import { FormBox } from '../components/Form/Box'
import { FormInput } from '../components/Form/Input'
import { FormButton } from '../components/Form/Button'
import { FormFooter } from '../components/Form/Footer'
import { FormHeader } from '../components/Form/Header'
import { formConfig } from './formConfig'
import styles from './styles.module.scss'

export default function SignIn () {
  const formMethods = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div className={styles.page}>
      <FormBox>
        <FormHeader
          subtitle='Start to organize your life with'
          title='MyOrganizer'
        />

        <form className={styles.formLayout} onSubmit={formMethods.handleSubmit(onSubmit)}>
          <FormProvider {...formMethods}>
            {
              formConfig.map(({ name, label, type, rules }) =>
                <FormInput
                  fullWidth
                  key={label}
                  label={label}
                  name={name}
                  type={type}
                  rules={rules}
                />
              )
            }
            <FormButton>Sign in</FormButton>
          </FormProvider>
        </form>

        <FormFooter
          href='/auth/signUp'
          linkText='here'
          text='Dont have an account? Sign in '
        />
      </FormBox>
    </div>
  )
}
