import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
export const dataProvider=createContext()

const Data = ({children}) => {
let [name,setname]=useState([])

  return (
    <dataProvider.Provider value={{name,setname}}>
      {children}
    </dataProvider.Provider>
  )
}

export default Data;
