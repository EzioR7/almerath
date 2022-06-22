// Issue Context
import React, { useContext, useState } from "react"

// To get Issue Data
const Issue = React.createContext()

// To Update Issue Data
const UpdateIssue = React.createContext()


// Custom Hooks To Access The Two Context Globally in the App
export function useIssue() {
  return useContext(Issue)
} 

export function useUpdateIssue() {
  return useContext(UpdateIssue)
}


// Issue Provider
export function IssueProvider({ children }) {
  // Issue Data
  const [data, setData] = useState({
    gender: '',
    amount: 0,
    creed: '',
    inherits: {
      fard: [],
      league: []
    },
  })

  function updateIssue(obj) {
    // For Update Issue Data
    setData((previousState) => {
      return ({...previousState, ...obj})
    })
  }


  return (
    <Issue.Provider value={data}>
      <UpdateIssue.Provider value={updateIssue}>
        {children}
      </UpdateIssue.Provider>
    </Issue.Provider>
  )
}