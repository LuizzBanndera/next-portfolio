import { createContext, useContext, useState } from 'react'

const modal = { isOpen: false, handleOpen: (isOpen: boolean) => {} }

const AppContext = createContext({ modal })

export function AppWrapper({ children }: any) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = (isOpen: boolean) => setIsOpen(isOpen)

  const modal = { isOpen, handleOpen }

  let ctx = { modal }

  return <AppContext.Provider value={ctx}>{children}</AppContext.Provider>
}

export function useAppContext() {
  return useContext(AppContext)
}
