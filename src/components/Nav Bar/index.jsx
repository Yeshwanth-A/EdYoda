import React from 'react'
import LOGO from '../../assets/LOGO.png'
import { Icon } from '@iconify/react';
export default function NavBar() {
  return (
    <div className='nav-container'>
      <div className='left-container'>
        <img className='logo' src={LOGO}/>
        <div className='left-content'>Course<Icon icon="tabler:chevron-down" /></div>
        <div className='left-content'>Programs<Icon icon="tabler:chevron-down" /></div>      
      </div>
      <div className='right-container'>
        <Icon style={{width:'100px'}}icon="material-symbols:search" />
        <span>Log in</span>
        <span className='bg-blue'><p className='txt'>Join Now</p></span>
      </div>  
      
    </div>
  )
}
