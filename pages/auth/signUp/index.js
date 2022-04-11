import { FormFooter } from '../components/Form/Footer'
import { FormBox } from '../components/Form/Box'
import styles from './styles.module.scss'
import { useState } from 'react'
import { Box, Step, StepLabel, Stepper, Button } from '@mui/material'
import { FormHeader } from '../components/Form/Header'
import { FormProvider, useForm } from 'react-hook-form'
import { formSections } from './sections/formSections'

const SignUpPage = () => {
  const formMethods = useForm()
  const [currentStep, setCurrentStep] = useState(0)
  const isLastStep = currentStep === formSections.length - 1

  const onSubmit = (data) => {
    if (isLastStep) {
      // send data to backend
      // rememeber to parse the necessary data
      console.log({ ...data, birthdate: data.birthdate.toDate() })
      return
    }

    setCurrentStep(currentStep + 1)
  }

  const handleBack = () => setCurrentStep(currentStep - 1)

  return (
    <div className={styles.page}>
      <FormBox>
        <FormHeader title='Create an account' />

        <Box>
          <Stepper alternativeLabel activeStep={currentStep}>
            {
              formSections.map(({ title }) =>
                <Step key={title}>
                  <StepLabel>{title}</StepLabel>
                </Step>
              )
            }
          </Stepper>
        </Box>

        <form className={styles.formLayout} onSubmit={formMethods.handleSubmit(onSubmit)}>
            <FormProvider {...formMethods}>

                {
                  formSections.map(({ component }, index) => index === currentStep && component)
                }

              <Box>
                <Button disabled={currentStep === 0} onClick={handleBack}>
                  Back
                </Button>

                <Button type='submit'>
                  { isLastStep ? 'Submit' : 'Next'}
                </Button>
              </Box>
            </FormProvider>
        </form>

        <FormFooter href='/auth/signIn' linkText='Here' text='Already have an account? Sign in ' />
      </FormBox>
    </div>
  )
}

export default SignUpPage
