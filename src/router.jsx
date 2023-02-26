import { createBrowserRouter } from "react-router-dom"

import PageHome from "@/pages/Home"
import PageMovie from "@/pages/Movie"
import PageError from "@/pages/Error"

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHome />,
    children: [
      {
        path: ":name",
        element: <PageMovie />,
        errorElement: <PageError />,
      },
    ],
  },
])

export default router
