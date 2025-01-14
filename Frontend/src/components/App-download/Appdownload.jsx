import React from 'react'
import { assets } from '../../assets/assets'
import './Appdow.css'

const Appdownload = () => {
  return (
    <div className='app-downlaod' id='app-download'>
      <p>For Bettter Experience Download <br />Tomato App</p>
      <div className="app-download-platform">
        <img src={assets.play_store} alt="" />
        <img src={assets.app_store} alt="" />
      </div>
    </div>
  )
}

export default Appdownload
