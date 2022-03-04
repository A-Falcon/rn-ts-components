import React from 'react'
import styled from 'styled-components/native'
import { useNavigate } from 'react-router-native'
import {Text, View, Keyboard, TouchableWithoutFeedback} from 'react-native'

import Header from '../../components/Common/Header'
import Switch from '../../components/Switch'

const SwitchView:React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header navigate={() => navigate('/')} />
      <Container>
        <Switch />
      </Container>
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


export default SwitchView