import React from 'react'
import './styles.css'
import { ReactComponent as Logo } from 'core/assets/img/logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="main-header">
      <Logo />
      <Link to="/">
        <div className="logo-text">
          <span className="logo-text-1">Big Game</span>
          <span className="logo-text-2"> Survey</span>
        </div>
      </Link>
    </header>
  )
}

export default Header
