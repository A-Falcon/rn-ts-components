import React from 'react'
import styled from 'styled-components/native'
import { useNavigate } from 'react-router-native'
import {Text, View, Keyboard, TouchableWithoutFeedback} from 'react-native'

import Card from '../../components/FlashCard'
import Header from '../../components/Common/Header'

const FlashCard: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <Header navigate={() => navigate('/')} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <Container> 
          <Card />
       </Container>
       </TouchableWithoutFeedback>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%; */

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

// `

const Container = styled.View`
  background-color: ${(props) => props.theme.colors.dark};
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`
export default FlashCard