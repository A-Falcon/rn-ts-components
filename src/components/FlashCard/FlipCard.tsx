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
       <Title>{title}</Title>
      <Content>
       
        <TextInput 
        placeholder='Type something...' 
        value={value} 
        //@ts-ignore
        onChange={(value: string) => onChange(value)} 
        ref={inputRef}
        autoFocus={autoFocus}
        />
      </Content>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 300px;
  width: 300px;
  background-color: #DDC0C5;
  border-radius: 10px;
`
const Content = styled.View`
display: flex;
align-items: center;
flex-direction: column;
justify-content: flex-start;
/* background-color: red; */
height: 150px;
`
const Title = styled.Text`
font-size: 20px;
align-self: flex-start;
margin-left: 30px;


`
const TextInput = styled.TextInput`
  /* background-color: green; */
  width: 50%;
  height: 60px;
  border-bottom-color: black;
  border-bottom-width: 2px;
  
`


export default FlipCard