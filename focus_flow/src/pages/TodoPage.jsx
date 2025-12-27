import React from 'react'
import TodoComp from '../components/TodoComp'
import Searchbar from '../components/Searchbar'
import "./TodoPage.css"

const TodoPage = () => {
  return (
    <>
      <div className="mt-6 px-3 sm:px-4">
        <Searchbar />
      </div>
      <div className="mt-6 px-3 sm:px-4 text-black">
        <TodoComp />
      </div>
    </>
  )
}

export default TodoPage
