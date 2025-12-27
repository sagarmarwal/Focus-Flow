import React from 'react'
import Searchbar from '../components/Searchbar'
import ChatComp from '../components/ChatComp'

const Chatgpt = () => {
  return (
    <>
      <div className="mt-6 px-3 sm:px-4">
        <Searchbar />
      </div>
      <div className="mt-6 px-3 sm:px-4 text-black">
        <ChatComp />
      </div>
    </>
  )
}

export default Chatgpt
