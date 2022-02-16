import React, { useReducer } from 'react'
import styled from 'styled-components/native'
import {View, TextInput, Text, Button, StyleSheet, TouchableOpacity} from 'react-native'
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
     validateOnChange: false,
     validateOnBlur: false,
     onSubmit: values => {
       console.log(values);
     },
   });
  //  console.log('errors')
   console.log(formik.errors)
  return (
    // <Wrapper>
       <FormView style={styles.shadowProp} >
          <Input
           onChangeText={formik.handleChange('name')}
           onBlur={formik.handleBlur('name')}
           value={formik.values.name}
           placeholderTextColor='#887B7E'
           placeholder='Name...'
         />
         {/* {formik.errors.name &&  */}
         <ErrText>{formik.errors.name}</ErrText>
         {/* } */}
          <Input
           onChangeText={formik.handleChange('email')}
           onBlur={formik.handleBlur('email')}
           value={formik.values.email}
           placeholderTextColor='#887B7E'
           placeholder='Email...'
         />
          {/* {formik.errors.email &&  */}
         <ErrText>{formik.errors.email}</ErrText>
          {/* } */}
         <SubmitButton onPress={() => formik.handleSubmit()}>
            <ButtonText>Submit</ButtonText>
         </SubmitButton>
       </FormView>
    // {/* </Wrapper> */}
  )
}


const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 5},
    shadowOpacity: 0.15,
    shadowRadius: 20,
  },
 
}) 


const FormView = styled.View`
  display:flex;
  align-items: center;
  justify-content:center;
  height: 600px;
  width: 325px;
  border-radius: 10px;
  background-color:#503336;
  padding: 20px;

`
const Input = styled.TextInput`
  text-align: left;
  padding-left: 20px;
  margin: 10px;
  height: 50px;
  width: 90%;
  font-size: 17px;
  /* background-color: #472d30; */
  color: #DDC0C5;
  border-color: #887B7E;
  border-bottom-width: 1px;

`
const ErrText = styled.Text`
  font-size: 14px;
  color: crimson;

`
const SubmitButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height:50px;
  background-color: #472d30;
  width: 90%;
  border-radius: 10px;
`
const ButtonText = styled.Text`
  font-size: 17px;
  color: #DDC0C5;
`
  export default Inputs