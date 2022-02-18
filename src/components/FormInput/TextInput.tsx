import React from 'react'
import styled from 'styled-components/native'
import { FormikProps } from 'formik';


interface TextInputProps  {
 label: string,
 formik: FormikProps<any>
 formikKey: string,

}

const TextInput: React.FC<TextInputProps>= ({ formik, formikKey}) => {
  return (
    
       <FormView>
          <LabelText>{formikKey}</LabelText>
            <Input
              onChangeText={formik.handleChange(formikKey)}
              onBlur={formik.handleBlur(formikKey)}
              blurOnSubmit
              value={formik.values[formikKey]}
              placeholderTextColor='#887B7E'
          />
         <ErrText>{formik.errors[formikKey]}</ErrText>
       </FormView>
  )
}


const FormView = styled.View`
  display:flex;
  align-items: center;
  justify-content:center;
  width:100%;
  border-radius: 10px;
  background-color: transparent;
  padding: 20px;

`

const LabelText = styled.Text`
  align-self: flex-start;
  padding-left: 43px;
  color: ${(props) => props.theme.colors.lightText};
`

const Input = styled.TextInput`
  text-align: left;
  padding-left: 20px;
  height: 50px;
  width: 90%;
  font-size: 17px;
  color: ${(props) => props.theme.colors.light};
  border-color: ${(props) => props.theme.colors.lightText};
  border-bottom-width: 1px;

`
const ErrText = styled.Text`
  font-size: 14px;
  color: ${(props) => props.theme.colors.errText};

`

  export default TextInput