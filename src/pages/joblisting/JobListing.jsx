import React from 'react'
import Jobcard from '../../components/joblisting/Jobcard'
import FilterAndSort from '../../components/joblisting/FilterAndSort'
import "./JobListing.css";

export default function JobListing() {
  return (
    <div>
    
    <div className="outer_container">
        {/* First div for filter and sorting options */}
        <div className="filter_sort_container">
        <FilterAndSort></FilterAndSort>
        </div>

        {/* Second div for job view */}
        <div className="job_view_container">
            <Jobcard></Jobcard>
            <Jobcard></Jobcard>
            <Jobcard></Jobcard>
            <Jobcard></Jobcard>
        </div>

    
    </div>

    </div>
  )
}
