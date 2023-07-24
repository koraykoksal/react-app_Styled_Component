import React from 'react'
import { Nav } from './Nav'
import HeaderStyled from './styled/HeaderStyled'
import Button from './styled/Buton'
import IMG from './styled/Image'

export const Header = () => {
  return (
    <HeaderStyled>

      <div>
      <h1>The IT Career of Your Dreams Starts Here!</h1>
        <p>
          Clarusway is a leading international software Bootcamp. Join a micro
          class online with other trainees and learn coding skills with a
          highly-skilled instructor.
        </p>
      <Button>Start Your new Carrear</Button>
      </div>

      <IMG src='./images/hero.jpg'/>

    </HeaderStyled>
  )
}
