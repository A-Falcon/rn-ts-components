import React, { useReducer } from 'react'
import styled from 'styled-components/native'
import {View, TextInput, Button} from 'react-native'
import { useFormik } from 'formik';
import * as yup from 'yup';

const userValidationSchema = yup.object({
  name: yup.string().min(2).max(15).required(),
  email: yup.string().email().required(),
});

const Inputs: React.FC= () => {
  const formik = useFormik({
     initialValues: {
       name: '',
       email: '',
     },
     validationSchema: userValidationSchema,
     onSubmit: values => {
       console.log('onSubmit');
     },
   });
   console.log('errors')
   console.log(formik.errors)
  return (
    <Wrapper>
       <FormView>
          <Input
           onChangeText={formik.handleChange('name')}
           onBlur={formik.handleBlur('name')}
           value={formik.values.name}
           placeholder='name'
         />
          <Input
           onChangeText={formik.handleChange('email')}
           onBlur={formik.handleBlur('email')}
           value={formik.values.email}
           placeholder='email'
         />
         <Button onPress={() => formik.handleSubmit()} title="Submit" />
       </FormView>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 700px;
  width: 400px;
  background-color: #DDC0C5;
  border-radius: 10px;
  `

const FormView = styled.View`
align-items: center;
justify-content:center;

background-color: red;
height: auto;
padding: 20px;
`
const Input = styled.TextInput`
display:flex;
justify-content: center;
background-color: blue;
font-size: 20px;
text-align: center;
width: 50%;
color: black;
height: 50px;
margin: 10px;
`
  export default Inputs