import { useContext } from 'react'
import { StoreContent } from 'store'

export const useStore = () => useContext(StoreContent)
