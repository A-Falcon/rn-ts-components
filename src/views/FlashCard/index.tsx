import React from 'react'
import styled from 'styled-components/native'
import { useNavigate } from 'react-router-native'
import {Text, View, Keyboard, TouchableWithoutFeedback} from 'react-native'

import Card from '../../components/FlashCard'
import Header from '../../components/Common/Header'

const FlashCard: React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header navigate={() => navigate('/')} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <Container> 
          <Card />
       </Container>
       </TouchableWithoutFeedback>
    </>
  )
}


const Container = styled.View`
  background-color: ${(props) => props.theme.colors.dark};
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`
export default FlashCard