import React from 'react'
import { Route, Routes } from 'react-router-native'

import Home from './views/Home'
import FlashCard from './views/FlashCard'
import FormInput from'./views/FormInput'
import Switch from './views/Switch'



const Routing: React.FC = () => (
  <Routes>
    <Route  path="/" element={<Home />} />
    <Route  path='/flashcard' element={<FlashCard />} />
    <Route  path='/forminput' element={<FormInput />} />
    <Route path='/switch' element={<Switch />} />
  </Routes>
)

export default Routing