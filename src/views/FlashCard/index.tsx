import React from 'react'
import styled from 'styled-components/native'
import { useNavigate } from 'react-router-native'
import {Text, View} from 'react-native'

import Card from '../../components/FlashCard'

const FlashCard: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <Header>
        <Button onPress={() => navigate("/")}>
          <ButtonText>Home</ButtonText>
        </Button>
        <Title>flash card component</Title>
      </Header>
       <Container> 
          <Card />
       </Container>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: blue;
  height: 100%;
  width: 100%;

`
const Header = styled.View`
  display: flex;
  flex-direction: row;
  padding: 20px;
  margin-top:25px;
  align-self: flex-start;
  background-color: green;
  
`
const Button = styled.TouchableOpacity`
 
`

const ButtonText = styled.Text`
  flex: 1;
  font-size: 20px;
  color: white;
`
const Title = styled.Text`
flex: 2;
  font-size: 20px;
  text-align: center;
  /* margin-left: 20px; */
`

const Container = styled.View`
  background-color: red;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
`
export default FlashCard