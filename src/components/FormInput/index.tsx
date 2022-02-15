import React from 'react'
import styled from 'styled-components/native'

import Inputs from './Inputs'


const Form: React.FC = () => {
  return (
    <Wrapper>
      {/* <Logo /> */}
      <Inputs/>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:transparent;
  height: 100%;
  width:100%;
`

export default Form