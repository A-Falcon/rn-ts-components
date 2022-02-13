import React from 'react'
import { Route, Routes } from 'react-router-native'

import Home from './views/Home'
import FlashCard from './views/FlashCard'
import FormInput from'./views/FormInput'

const Routing: React.FC = () => (
  <Routes>
    <Route  path="/" element={<Home />} />
    <Route  path='/flashcard' element={<FlashCard />} />
    <Route  path='/forminput' element={<FormInput />} />
  </Routes>
)

export default Routing