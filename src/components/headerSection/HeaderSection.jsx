import React from 'react'
import './style.scss'
import { FaSearch } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";

const HeaderSection = () => {
  return (
    <div className='HeaderBanner'>
      <div className='postWork'>
        <button className='postWorkButton'><CiSquarePlus /> Post Job</button>
      </div>
      <div className='getWork'>
        <button className='getWorkButton'><FaSearch /> Search job</button>
      </div>
    </div>
  )
}

export default HeaderSection
