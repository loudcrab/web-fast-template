import { types } from 'mobx-state-tree'
import { createContext } from 'react'

const RootStore = types.model('RootStore', {})

const store = RootStore.create({})

export const StoreContent = createContext(store)

export const StoreContentProvider: React.FC = props => (
  <StoreContent.Provider value={store}>
    {props.children}
  </StoreContent.Provider>
)

export default RootStore
