import React from 'react'
import { GlobalStyle } from './styles/GlobalStyle'
import { ListOfPhotoCard } from './components/ListOfPhotoCard'
import { ListOfCategories } from './components/ListOfCategories/'
import { Logo } from './components/Logo/'

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Logo />
      <ListOfCategories />
      <ListOfPhotoCard />
    </div>
  )
}
