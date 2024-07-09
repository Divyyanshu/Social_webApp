import { Link } from "react-router-dom"


const navbar = () => {
  return (
    <div className="w-full flex justify-center items-center">
    <nav className="h-14 rounded-full bg-red-600 text-zinc-50 opacity-80 backdrop-blur-lg flex justify-center items-center fixed bottom-5 z-50 w-1/4">
      <ul className="flex w-full justify-around">
        <Link to ="/"><li>Feed</li></Link>
        <Link to ="/chat"><li>Chat</li></Link>
        <Link to ="/account"><li>Account</li></Link>
      </ul>
    </nav>
    </div>
  )
}

export default navbar