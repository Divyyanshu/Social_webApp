
import { Outlet } from "react-router-dom"
import Navbar from "../ui/navbar"
import { Button } from "@nextui-org/button"


const Layout = () => {
  return (
  <div>
      <Button color = 'secondary'className="fixed right-4 top-4 z-50">Login</Button>
      <Navbar></Navbar>
      <Outlet></Outlet>
  </div>
  )
}

export default Layout