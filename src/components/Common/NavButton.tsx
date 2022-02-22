import React from 'react'
import styled from 'styled-components/native'
import { useNavigate } from 'react-router';


interface NavButtonProps {
  label?: string
  navigate?: () => void
}

const NavButton:React.FC<NavButtonProps> = ({label, navigate}) => {
  return (
    <Wrapper onPress={navigate}>
      <Text>{label}</Text>
    </Wrapper>
  )
}

const Wrapper = styled.TouchableOpacity`
/* background-color: red; ~~~~~~~ my testing color */
padding: 10px;
  
`
const Text = styled.Text`
  color:${(props) => props.theme.colors.lightText};
  font-size: 20px;
`

export default NavButton