import React, { useContext } from 'react'

const AppContext = React.createContext()
export const useUser = () => useContext(AppContext)
const AppContextProvider = ({ children }) => {
  const user = {
    name: 'hung',
    age: 22
  }
  return <AppContext.Provider value={user}>{children}</AppContext.Provider>
}
export default AppContextProvider
