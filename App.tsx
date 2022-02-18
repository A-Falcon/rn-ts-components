import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled, {ThemeProvider} from 'styled-components/native'
import { NativeRouter } from 'react-router-native'

import theme from './src/theme'
import Routing from './src/Routes'


export default function App() {
  return (
    <NativeRouter>
      <ThemeProvider theme={theme}>
         <SafeAreaView>
            <StatusBar style="auto"/>
            <Routing />
        </SafeAreaView>
        </ThemeProvider>
    </NativeRouter>
  );
}

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.mid};
`
