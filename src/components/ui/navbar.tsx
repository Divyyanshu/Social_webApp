import { Link } from "react-router-dom"


const navbar = () => {
  return (
    <nav className="h-14 rounded-full bg-gray-200 opacity-80 backdrop-blur-lg flex justify-center items-center fixed bottom-0 z-50 w-1/4">
      <ul className="flex w-full justify-around">
        <Link to ="/"><li>Feed</li></Link>
        <Link to ="/chat"><li>Chat</li></Link>
        <Link to ="/account"><li>Account</li></Link>
      </ul>
    </nav>
  )
}

export default navbar