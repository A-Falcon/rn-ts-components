import React from 'react'
import styled from 'styled-components/native'
import { useNavigate } from 'react-router-native'
import {Text, View, Keyboard, TouchableWithoutFeedback} from 'react-native'

import Header from '../../components/Common/Header'

const Switch:React.FC = () => {
  const navigate = useNavigate()
  return (
    <Wrapper>
      <Header navigate={() => navigate('/')} />
    </Wrapper>
  )
}

const Wrapper = styled.View`

`

export default Switch