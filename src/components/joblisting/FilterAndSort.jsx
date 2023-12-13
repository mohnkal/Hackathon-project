import React from 'react'
import "./FilterAndSort.css"


export default function FilterAndSort() {
  return (
    <div>

        {/* Outer container */}
        <div className='filter_and_sort_container'>
            {/* All divs placed horizontally */}

            {/* Div with the filter title */}
            <div className='filter_title'>
                <h2>Filter</h2>
            </div>

            {/* Fixed Price container */}
            <div className='fixed_price_container'>

                {/* Fixed Price title */}
                <div className='fixed_price_title'>
                    <h3>Price Range</h3>
                </div>

                {/* Fixed Price Min Input */}
                <div className='fixed_price_min_input'>
                    <p>Min</p>
                    <input type='number'></input>
                </div>

                {/* Fixed Price Max Input */}
                <div className='fixed_price_max_input'>
                    <p>Max</p>
                    <input type='number'></input>
                </div>

            {/* Filter by time of completion */}



            {/* Submit Button */}
            <div>
                <input type="submit"></input>
            </div>
            

            </div>
        </div>


    </div>
  )
}
