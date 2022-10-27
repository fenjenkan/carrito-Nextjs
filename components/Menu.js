import Link from 'next/link'
import React from 'react'
import style from "../styles/menu.module.css"
import { useAppContext } from './stateWrapper'

const Menu = () => {
  const cart = useAppContext();

  function handleOpenCart(){
    cart.openCart();
  }
  return (
    <nav className={style.menu}>
        <div>
            <Link href="/"><a className={style.link}>Home</a></Link>
            <Link href="/store"><a className={style.link}>Store</a></Link>
            <Link href="/faq"><a className={style.link}>FAQ</a></Link>
        </div>
        <div>
            <a href='#' className={style.link} onClick={handleOpenCart}>cart ({cart.getNumberOfItems()})</a>
        </div>
    </nav>
  )
}

export default Menu