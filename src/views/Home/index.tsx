import React from 'react'
import { View, Text ,TouchableOpacity } from 'react-native'
import Router, {useNavigate} from 'react-router'
import styled from 'styled-components/native'

import NavButton from '../../components/Common/NavButton'
import Header from '../../components/Common/Header'

  const Home: React.FC = () => {
    // console.log(props);
    const navigate = useNavigate();
    return (
      <Wrapper>
          <Header />
          <NavButton navigate = {() => navigate("/flashcard")} label={'FlashCard'} />
          <NavButton navigate = {() => navigate("/forminput")} label={'FormInput'} />
      </Wrapper>
    )
}

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  background-color: ${(props) => props.theme.colors.darkest};
`
// const Header = styled.Text`
//   font-size: 20px;
//   color:${(props) => props.theme.colors.darkText};
// `
// const Button = styled.TouchableOpacity`
//   background-color: transparent;
//   padding: 20px;
  
// `
// const ButtonText = styled.Text`
//   color:${(props) => props.theme.colors.lightText};
//   font-size: 20px;
// `

export default Home