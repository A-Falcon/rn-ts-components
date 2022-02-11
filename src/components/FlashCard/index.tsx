import React, {useRef, useState} from 'react'

import styled from 'styled-components/native'
import {View,Text, Animated, StyleSheet} from 'react-native'

import FlipCard from './FlipCard'
// import Word from './Word'

const Card: React.FC = () => {

  const animate = useRef(new Animated.Value(0))
  const [ isFlipped, setIsFlipped] = useState(false)
  const [frontText, setFrontText] = useState('')
  const [backText, setBackText] = useState('')
  
  const frontRef = useRef()
  const backRef = useRef()


  const handleFlip = () => {
    Animated.timing(animate.current, {
      duration: 300,
      toValue: isFlipped ? 0 : 180,
      useNativeDriver: true,
    }).start(() => {
      //manage focus: this will allow us to type on both sides of the card
      // @ts-ignore
      isFlipped ? frontRef.current.focus() : backRef.current.focus()
      setIsFlipped(!isFlipped)
    })
  }

  const interpolateFront = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg']
  })

  const interpolateBack = animate.current.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg']
  })
  return (
    <Wrapper behavior='padding'>
      <Button onPress={handleFlip}>
        <View>
          <Animated.View style={[{transform: [{rotateY: interpolateFront}]}, styles.hidden]}>
            <FlipCard title="Front" value={frontText} onChange={setFrontText} inputRef={frontRef} autoFocus={true}/>
          </Animated.View>
          <Animated.View style={[{transform: [{rotateY: interpolateBack}]}, styles.back, styles.hidden]}>
            <FlipCard title="Back" value={backText} onChange={setBackText} inputRef={backRef}/>
          </Animated.View>
            {/* <ButtonText onPress={handleFlip}>Flip</ButtonText> */}
        </View>
        </Button>
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
  /* padding: 20px; */
  /* background-color: blue; */
`
const ButtonText = styled.Text`
  color: white;
  font-size: 20px;
`


export default Card