import React from 'react'
import styled from 'styled-components/native'
import * as yup from 'yup'
import { useFormik } from 'formik';

// import Logo from './Logo'
import TextInput from './TextInput'
import SubmitButton from './SubmitButton'

const userValidationSchema = yup.object({
  name: yup.string().min(2).max(15).required(),
  email: yup.string().email().required(),
});

const Form: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validationSchema: userValidationSchema,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: values => {
      console.log(values);
    },
  });
 //  console.log('errors')
 //  console.log(formik.errors)
  return (
    <Wrapper>
      {/* <Logo /> */}
      <TextInput
        label={'Name'}
        formik={formik}
        formikKey={'name'}
      />      
      <TextInput
        label={'Email'}
        formik={formik}
        formikKey={'email'}
      />
      <SubmitButton formik={formik}/>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:${(props) => props.theme.colors.dark};
  height: 100%;
  width:100%;
`

export default Form