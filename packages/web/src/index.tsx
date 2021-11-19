import App from './App'
import './index.css'
import { StoreContentProvider } from './store'
import theme from './theme'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

ReactDOM.render(
  <React.StrictMode>
    <StoreContentProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </StoreContentProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
