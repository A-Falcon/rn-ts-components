import React from 'react'
import styled from 'styled-components/native'
import { useNavigate } from 'react-router-native'
import {Text, View, Keyboard, TouchableWithoutFeedback} from 'react-native'

import Card from '../../components/FlashCard'

const FlashCard: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <Header>
        <Button onPress={() => navigate("/")}>
          <ButtonText>Home</ButtonText>
        </Button>
        <Title>FlashCard Component</Title>
      </Header>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
       <Container> 
          <Card />
       </Container>
       </TouchableWithoutFeedback>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */
  height: 100%;
  width: 100%;

`
const Header = styled.View`
  display: flex;
  flex-direction: row;
  
  padding: 20px;
  margin-top:25px;
  /* background-color: green; */
  
`
const Button = styled.TouchableOpacity`
 /* background-color: purple; */
 
`

const ButtonText = styled.Text`
  flex: 1;
  font-size: 15px;
  color: #DDC0C5;
  justify-content: center;
`
const Title = styled.Text`
  flex: 2;
  font-size: 20px;
  text-align: center;
  /* margin-left: 20px; */
`

const Container = styled.View`
  background-color: #472d30;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`
export default FlashCard