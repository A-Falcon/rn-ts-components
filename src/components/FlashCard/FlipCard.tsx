import React from 'react'
import styled from 'styled-components/native'
import {View, TextInput} from 'react-native'
// import {Card, Title} from 'react-native-paper'

type Props = {
  title: string
}

const FlipCard: React.FC<Props> = ({title}) => {
  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        <TextInput/>
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  height: 350px;
  width: 350px;
  background-color: papayawhip;
`
const Content = styled.View`

`
const Title = styled.Text`

`



export default FlipCard