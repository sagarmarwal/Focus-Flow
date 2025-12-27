import React from 'react'
import Searchbar from '../components/Searchbar'
import PlannerComp from '../components/PlannerComp'

const Planner = () => {
  return (
    <>
      <div className="mt-6 px-3 sm:px-4">
        <Searchbar />
      </div>
      <div className="mt-6 px-3 sm:px-4 text-black">
        <PlannerComp />
      </div>
    </>
  )
}

export default Planner
