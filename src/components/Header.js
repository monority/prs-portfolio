import React from 'react'
import MenuDropdown from './MenuDropdown'

const Header = () => {
    return (
        <div className='Header'>
            <nav>
                <div className="container">
                    <div className="wrappers">
                        <div className="wrapper">
                            <a href="/"><img src={`${process.env.PUBLIC_URL}/logo.png`} alt="" /></a>
                            <h3>ronan</h3>
                        </div>
                        <div class="wrapper">
                            <ul>
                                <li class="active"><a href="#work">Work</a></li>
                                <li><a href="#Personnal">Personnal</a></li>
                            </ul>
                            <ul>
                                <li><a href="#Personnal"><i class="fa-brands fa-github"></i></a></li>
                                <li><a href="#Personnal"><i class="fa-brands fa-linkedin"></i></a></li>
                                <li><a href="#Personnal"><MenuDropdown/></a></li>

                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header