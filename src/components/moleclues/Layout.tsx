
import { Outlet } from "react-router-dom"
import Navbar from "../ui/navbar"


const Layout = () => {
  return (
  <div>Layout
      <Navbar></Navbar>
      <Outlet></Outlet>
  </div>
  )
}

export default Layout