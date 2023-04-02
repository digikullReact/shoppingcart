import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import store from './component/store/store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './component/router'

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store={store}>

    <RouterProvider router={router} />
  </Provider>
  // <React.StrictMode>
  // </React.StrictMode>
)