import React from 'react'
import HeaderSection from '../../components/headerSection/HeaderSection'
import Jobcard from '../../components/joblisting/Jobcard'
import './style.scss'

const LandingPage = () => {
  return (
    <div>
      <HeaderSection/>
      <div className="job_view_container">
            <Jobcard></Jobcard>
            <Jobcard></Jobcard>
            <Jobcard></Jobcard>
            <Jobcard></Jobcard>
        </div>
    </div>
  )
}

export default LandingPage
