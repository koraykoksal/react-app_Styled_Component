import React from 'react'
import NavStyled from './styled/NavStyled'
import Button from './styled/Buton'

export const Nav = () => {
  return (
  
      <NavStyled>
        <div>
        <img src="./images/logo.png" 
        width="250px"
        alt="logo" />
        </div>
      
      <div>
        <Button>Apply Courses</Button>
        <Button primary>Talk To Adviser</Button>
      </div>

      </NavStyled>
  )
}
