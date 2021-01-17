import React from 'react'
import AuthOptions from './auth/AuthOptions'


function Navbar() {
    return (
        <div>
            <header>
                <div className="logo">
                    <h1>Cherry Entertainment</h1>
                </div>
                <div className="space"></div>
                <div>
                                       
                    
                </div>
                <div>
                    <AuthOptions/>
                </div>
               
            </header>
            
        </div>
    )
}

export default Navbar
