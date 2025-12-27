import React from 'react'
import Pomo from './pomo'
import PomoComp from '../components/PomoComp'
import Searchbar from '../components/Searchbar'

const PomoTimerPage = () => {
  return (
    <>
      <div className="mt-6 px-3 sm:px-4">
        <Searchbar />
      </div>

      <div className="mt-6 px-3 sm:px-4 text-black">
        <PomoComp />
      </div>
    </>
  )
}

export default PomoTimerPage
