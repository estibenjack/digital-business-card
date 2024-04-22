import React from 'react'
import ProfilePic from '../assets/profile-picture.jpeg'
import Email from '../assets/Mail.svg'
import LinkedIn from '../assets/linkedin.svg'

export default function Info() {
    return (
        <header className='header'>
            <div className='info--profile-pic'>
                <img src={ProfilePic} alt='Photo of Steven Jackson' />
            </div>
            <div className='info--information'>
                <h1 className='name'>Steven Jackson</h1>
                <h3 className='role'>Frontend Developer</h3>
                <p className='website'>
                  <a href=".">stevenjackson.website</a>  
                </p>
            </div>
            <div className='info--actions'>
                <button className='email-btn'>
                    <img src={Email} alt="Email icon" />
                    Email
                </button>
                <button className='linkedin-btn'>
                    <img src={LinkedIn} alt="LinkedIn icon" />
                    LinkedIn
                </button>
            </div>
        </header>
    )
}