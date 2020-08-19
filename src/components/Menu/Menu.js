import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Menu.css'
import Body from '../Body/Body'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

function Menu() {
    return (
        <div className='menu'>
            <Navbar/>
            <Sidebar/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default Menu
