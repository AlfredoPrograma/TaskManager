import { FormFooter } from '../components/Form/Footer'
import { FormBox } from '../components/Form/Box'
import styles from './styles.module.scss'

const SignUpPage = () => {
  return (
    <div className={styles.page}>
      <FormBox>
        <header>
          Hello world
        </header>

        <FormFooter href='/auth/signIn' linkText='Here' text='Already have an account? Sign in ' />
      </FormBox>
    </div>
  )
}

export default SignUpPage
