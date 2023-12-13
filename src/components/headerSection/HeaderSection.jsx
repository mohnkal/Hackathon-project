import React from 'react'
import './style.scss'
import { CiSearch, CiSquarePlus } from "react-icons/ci";

const HeaderSection = () => {
  return (
    <div className='HeaderBanner'>
      <div className='postWork'>
        <button className='postWorkButton'><CiSquarePlus/> Post Job</button>
      </div>
      <div className='getWork'>
        <button className='getWorkButton'><CiSearch />Search job</button>
      </div>
    </div>
  )
}

export default HeaderSection
