import React from 'react'
import styled from 'styled-components/native'
import { FormikProps } from 'formik';

interface SubmitButtonProps {
  formik: FormikProps<any>
}

const SubmitButton: React.FC<SubmitButtonProps>= ({ formik }) => {

  return (
    <Wrapper>        
         <Button onPress={() => formik.handleSubmit()}>
            <ButtonText>Submit</ButtonText>
         </Button>
    </Wrapper>
  )
}


const Wrapper = styled.View`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
`
const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height:50px;
  background-color: ${(props) => props.theme.colors.darkest};
  width: 90%;
  border-radius: 20px;
`
const ButtonText = styled.Text`
  font-size: 17px;
  color: ${(props) => props.theme.colors.brightText};
`
export default SubmitButton
