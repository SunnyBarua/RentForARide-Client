import React from 'react'
import Logo from "../images/logo.png"
const Layout = (props) => {
    return (
        <>
        <div className='header'>
            <div className='d-flex justify-content-between align-items-center'>
               <img src={Logo} alt="logo" className='logo'/>
               <button className='user'>user</button>
            </div>            
        </div>
        <div className="content">
        {props.children}
    </div>
    </>
    )
}

export default Layout
