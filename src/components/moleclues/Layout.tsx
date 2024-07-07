
import { Outlet } from "react-router-dom"
import Navbar from "../ui/navbar"
import { Button } from "@nextui-org/button"
import {auth} from "../../lib/firebase"
import {useNavigate } from "react-router-dom";
import { LogOut } from "lucide-react";
import { signOut } from "firebase/auth";

const Layout = () => {
const navigate = useNavigate()
async function logout() {
  signOut(auth).then(()=>{
    navigate('/login')
  })
}

  return (
  <div>
      <Button color = 'secondary'className="fixed right-4 top-4 z-50" onClick={logout}><LogOut></LogOut>LogOut</Button>
      <Navbar></Navbar>
      <Outlet></Outlet>
  </div>
  )
}

export default Layout