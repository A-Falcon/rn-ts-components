import React from 'react'
import styled from 'styled-components/native'
import { useNavigate } from 'react-router-native'
import {Text, View, Keyboard, TouchableWithoutFeedback} from 'react-native'

import Header from '../../components/Common/Header'

const Switch:React.FC = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header navigate={() => navigate('/')} />
      <Wrapper>

      </Wrapper>
    </>
  )
   
}

const Wrapper = styled.View`
  background-color: blue;
  height: 40px;
  width: 60px;
  border-radius: 50%;
  
`

export default Switch