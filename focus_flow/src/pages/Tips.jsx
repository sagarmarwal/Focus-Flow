import React from 'react'
import Searchbar from '../components/Searchbar'
import TipComp from '../components/TipsComp'

const Tips = () => {
  return (
    <>
      <div className="mt-6 px-3 sm:px-4">
        <Searchbar />
      </div>
      <div className="mt-6 px-3 sm:px-4">
        <TipComp />
      </div>
    </>
  )
}

export default Tips
