import React from 'react'
import './Workercard.scss'
import Jobcard from '../../components/joblisting/Jobcard'

const Workercard = () => {
  return (
    <div className='OuterContainer'>
        <div className="border">
            <h3 className='ordercomplete'>Completed orders - 12</h3>
        </div>
        <div className="job">
        <Jobcard></Jobcard>
        <Jobcard></Jobcard>
        <Jobcard></Jobcard>
        <Jobcard></Jobcard>
        </div>
    </div>
  )
}

export default Workercard
