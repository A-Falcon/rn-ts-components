import React from 'react'
import styled from 'styled-components/native'
import { useNavigate } from 'react-router-native'
import {Text, View} from 'react-native'

// import Card from '../../components/FlashCard/Card'

const FlashCard: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <Button onPress={() => navigate("/")}>
      
        <Text>Home</Text>
      </Button>
       {/* <Card /> */}
       <View>
         <Text>flash card component</Text>
       </View>
    </Wrapper>
  )
}

const Wrapper = styled.View`
background-color: blue;
height: 100%;
width: 100%;
`
const Button = styled.TouchableOpacity`
  padding: 20px;
`
export default FlashCard