import { createBrowserRouter } from "react-router-dom"

import App from "./App"
import PageHome from "@/pages/Home"
import PageMovie from "@/pages/Movie"
import PageError from "@/pages/Error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: ":name",
        element: <PageMovie />,
        errorElement: <PageError />,
      },
      {
        path: "*",
        element: <PageHome />,
      },
    ],
  },
])

export default router
