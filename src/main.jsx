import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { RouterProvider } from "react-router-dom"

import { ThemeProvider } from "@ui5/webcomponents-react"
import { setTheme } from "@ui5/webcomponents-base/dist/config/Theme"

import "@ui5/webcomponents/dist/features/InputElementsFormSupport.js"
import "@ui5/webcomponents-react/dist/Assets"

setTheme("sap_horizon")

import router from "./router"
import store from "./store"

import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
)
