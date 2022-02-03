import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native'
import { NativeRouter } from 'react-router-native'

import Routing from './src/Routes'


export default function App() {
  return (
    <NativeRouter>
         <SafeAreaView>
            <StatusBar style="auto"/>
            <Routing />
        </SafeAreaView>
      
    </NativeRouter>
  );
}

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
  background-color: pink;
`
