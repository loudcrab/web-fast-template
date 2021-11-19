import { Root } from './pages'
import { observer } from 'mobx-react-lite'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'

const App = () => (
  <BrowserRouter>
    <Suspense fallback={<div></div>}>
      <Root />
    </Suspense>
  </BrowserRouter>
)
export default observer(App)
