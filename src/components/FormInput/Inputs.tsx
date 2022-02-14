import React from 'react'
import styled from 'styled-components/native'
import {View, TextInput, Button} from 'react-native'
import { Formik, Field, Form, FormikHelpers } from 'formik';




const Inputs: React.FC= () => {

  return (
    <Wrapper>
   <Formik
     initialValues={{ email: '', name: ''}}
     onSubmit={values => console.log(values)}
   >
     {({ handleChange, handleBlur, handleSubmit, values }) => (
       <FormView>
          <Input
           onChangeText={handleChange('name')}
           onBlur={handleBlur('name')}
           value={values.name}
           placeholder='name'
         />
          <Input
           onChangeText={handleChange('email')}
           onBlur={handleBlur('email')}
           value={values.email}
           placeholder='email'
         />
         <Button onPress={handleSubmit} title="Submit" />
       </FormView>
     )}
   </Formik>
    </Wrapper>
  )
}

const Wrapper = styled.KeyboardAvoidingView`
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