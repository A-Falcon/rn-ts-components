import React, {useState} from 'react'
import styled from 'styled-components/native'
import {Switch} from 'react-native'

interface SwitchProps {
  switched: boolean,
  onPressed: () => void
}

const MySwitch: React.FC<SwitchProps>= ({switched, onPressed}) => {

  const [ off, on ] = useState(false)
  return (
    <Wrapper>
      <Nob></Nob>
    </Wrapper>
  )
}


const Wrapper = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 100px;
  width: 175px;
  padding: 5px;
  background-color: blue;
  border-radius: 50px;
  
`
const Nob = styled.View`
  height: 90px;
  width: 90px;
  background-color: red;
  border-radius: 50px;
  border: white 3px;
`

export default MySwitch
