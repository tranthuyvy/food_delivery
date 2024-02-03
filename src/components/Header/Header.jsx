import React, { useRef, useEffect } from 'react'
import { Container } from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import logo from '../../assets/images/logo.png'
import '../../styles/header.scss'

const nav__link = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Foods',
    path: '/foods',
  },
  {
    display: 'Cart',
    path: '/cart',
  },
  {
    display: 'Contact',
    path: '/contact',
  }
]

const Header = () => {
  const headerRef = useRef(null)
  const totalQuantity = useSelector(state => state.cart.totalQuantity)

  const menuRef = useRef(null)
  const toggleMenu = () => menuRef.current.classList.toggle('show__menu')

  useEffect (() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header__shrink')
      } else {
        headerRef.current.classList.remove('header__shrink')
      }
    })

    return () => window.removeEventListener('scroll')
  }, [])

  return (
    <header className='header' ref={headerRef}>
      <Container>
        <div className='nav__wrapper d-flex align-items-center justify-content-between'>
          <div className='logo'>
            <img src={logo} alt='logo' />
            <h5>TV Food</h5>
          </div>

          {/* ====== menu ======== */}
          <div className='navigation' ref={menuRef} onClick={toggleMenu}>
            <div className='menu d-flex align-items-center gap-5'>
              {nav__link.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={navClass => navClass.isActive ? 'active__menu' : ''}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav icons ======== */}
          <div className='nav__right d-flex align-items-center gap-4'>
            <span className='cart__icon'>
              <i class='ri-shopping-basket-2-line'></i>
              <span className='cart__badge'>{totalQuantity}</span>
            </span>

            <span className='user'>
              <Link to='/login'><i class='ri-user-line'></i></Link>
            </span>

            <span className='mobile__menu' onClick={toggleMenu}>
              <i class='ri-menu-line'></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
