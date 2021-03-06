import React from 'react'
import { TouchableWithoutFeedback , Keyboard} from 'react-native'
import { useNavigate } from 'react-router'
import styled from 'styled-components/native'

import Form from '../../components/FormInput'
import Header from '../../components/Common/Header' 

const FormInput: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <Header navigate={() => navigate('/')}/>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Form/>
      </Container>
      </TouchableWithoutFeedback>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;

`
// const Header = styled.View`
//   display: flex;
//   flex-direction: row;
//   padding: 20px;
//   margin-top:25px;
  
// `
// const Button = styled.TouchableOpacity`
 
// `

// const ButtonText = styled.Text`
//   flex: 1;
//   font-size: 15px;
//   color: ${(props) => props.theme.colors.brightText};
//   justify-content: center;
// `
// const Title = styled.Text`
//   flex: 2;
//   font-size: 20px;
//   text-align: center;
//   color: ${(props) => props.theme.colors.darkText};
// `

const Container = styled.View`
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;

`

export default FormInput