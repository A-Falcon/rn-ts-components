import React, {useRef, useState} from 'react'

import styled from 'styled-components/native'
import {View,Text, Animated, StyleSheet} from 'react-native'

import FlipCard from './FlipCard'
// import Word from './Word'

const Card: React.FC = () => {

  const animate = useRef(new Animated.Value(0))
  const [ isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    Animated.timing(animate.current, {
      duration: 300,
      toValue: isFlipped ? 0 : 180,
      useNativeDriver: true,
    }).start(() => {
      setIsFlipped(!isFlipped)
    })
  }

  const interpolateFront = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
  })

  const interpolateBack = animate.current.interpolate({
    inputRange: [180, 360],
    outputRange: ['180deg', '360deg']
  })
  return (
    <Wrapper behavior='padding'>
        <View>
          <Animated.View style={[{transform: [{rotateY: interpolateFront}]}, ]}>
            <FlipCard title="Front"/>
          </Animated.View>
          <Animated.View style={[{transform: [{rotateY: interpolateBack}]}, styles.back, styles.hidden]}>
            <FlipCard title="Back" />
          </Animated.View>
          <Button>
            <ButtonText onPress={handleFlip}>Flip</ButtonText>
          </Button>
        </View>
    </Wrapper>
  )
}

const styles = StyleSheet.create({
 hidden: {
  backfaceVisibility: 'hidden',
 },
 back: {
  position: 'absolute',
  top: 0,
 }

})

const Wrapper = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items: center;
`

const Button = styled.TouchableOpacity`
  align-self: center;
  padding: 20px;
`
const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
`


export default Card