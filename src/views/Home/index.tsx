import React from 'react'
import { View, Text ,TouchableOpacity } from 'react-native'
import Router, {useNavigate} from 'react-router'
// import { useHistory } from 'react-router-native'
import styled from 'styled-components/native'


  const Home: React.FC = () => {
    // console.log(props);
    const navigate = useNavigate();
    return (
      <Wrapper>
        <Button onPress={() => navigate("/flashcard")}>
        
          <Text>FlashCard</Text>
        </Button>
        
      </Wrapper>
    )
}

const Wrapper = styled.View`
  
`
const Button = styled.TouchableOpacity`
  background-color: transparent;
  padding: 20px;
`


export default Home