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
          <ButtonText>FlashCard</ButtonText>
        </Button>
        <Button onPress={() => navigate("/forminput")}>
          <ButtonText>FormInput</ButtonText>
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
const ButtonText = styled.Text`
  color:${(props) => props.theme.colors.darkText};
`

export default Home