import React from 'react'
import styled from 'styled-components/native'
import { useNavigate, useLocation, Navigate } from 'react-router';

import NavButton from './NavButton';

interface NavButtonProps {
  navigate?: () => void
}

function getRouteName(path: string) {
  switch (path) {
    case '/':
      return 'Home';
    case '/flashcard':
      return 'FlashCard Component';
   case '/forminput':
     return 'FormInput Component';
     case '/switch':
       return 'Switch'
  }
}

const Header: React.FC<NavButtonProps> = ({ navigate }) => {
  const location = useLocation();
  const currentRouteName = getRouteName(location.pathname)


  return (
    <Wrapper>
      { navigate && (
        <NavButton navigate={navigate} label={'Home'}/> 
      ) 
      }
      <Text>{currentRouteName}</Text>
    </Wrapper>
  )
}

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  height: 50px;
  align-items: center; 
  width: 100%;
  background-color: ${(props) => props.theme.colors.mid};

`
const Text = styled.Text`
  font-size: 20px;
  color:${(props) => props.theme.colors.darkText};
`
export default Header