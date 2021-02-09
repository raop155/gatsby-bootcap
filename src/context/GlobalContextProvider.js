import React, { createContext } from "react"

export const GlobalStateProvider = createContext()
export const GlobalDispatchProvider = createContext()

const initialState = {
  cart: "yes",
}

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: "no",
      }

    default:
      return state
  }
}

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return (
    <GlobalStateProvider.Provider value={state}>
      <GlobalDispatchProvider.Provider value={dispatch}>
        {children}
      </GlobalDispatchProvider.Provider>
    </GlobalStateProvider.Provider>
  )
}

export default GlobalContextProvider
