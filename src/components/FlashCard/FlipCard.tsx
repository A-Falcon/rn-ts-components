import React from 'react'
import styled from 'styled-components/native'
import {View} from 'react-native'
// import {Card, Title} from 'react-native-paper'

type Props = {
  title: string
  value: string
  onChange: (value: string) => void
  inputRef: any
  autoFocus?: boolean
}

const FlipCard: React.FC<Props> = ({title, value, onChange, inputRef, autoFocus}) => {
  return (
    <Wrapper>
      <Content>
        <Title>{title}</Title>
        <TextInput 
        placeholder='Type something...' 
        value={value} 
        onChange={(value: string) => onChange(value)} 
        ref={inputRef}
        autoFocus={autoFocus}
        />
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  height: 350px;
  width: 350px;
  background-color: papayawhip;
  border-radius: 10px;
`
const Content = styled.View`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const Title = styled.Text`
font-size: 40px;
text-align: center;
padding: 10px;
`
const TextInput = styled.TextInput`
  background-color: green;
  width: 50%;
  height: 60px;
  border-bottom-color: black;
  border-bottom-width: 2px;
  
`


export default FlipCard