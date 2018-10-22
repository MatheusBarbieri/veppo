import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import SocialMediaBar from '../social-media-bar'

import './stylesheets/menubar.scss'

const menuItens = [
  {
    title: 'Página Inicial',
    href: '/'
  },
  {
    title: 'Horários de Ônibus',
    href: '/horarios'
  },
  {
    title: 'Serviços',
    href: '/#servicos'
  }
]

export default class MenuBar extends Component {
  renderMenuItens() {
    return (
      menuItens.map((menuItem) => (
        <Link key={`item_${menuItem.title}`} className='menu-item' to={menuItem.href}>
          {menuItem.title}
        </Link>
      ))
    )
  }

  render() {
    return (
      <div className='menubar'>
        <div className='menubar-items'>
          {this.renderMenuItens()}

          <div className='menubar-items__right-area'>
            <div className='menu-item__phone'>
              (51) 3210-0101
            </div>
            <SocialMediaBar />
          </div>

        </div>
      </div>
    )
  }
}
