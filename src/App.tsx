

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Chat from './components/moleclues/Chat'
import Chats from './components/moleclues/Chats'
import Feed from './components/moleclues/Feed'
import Layout from './components/moleclues/Layout'
import Login from './components/moleclues/Login'
import Register from './components/moleclues/Register'
import Account from './components/moleclues/Account'

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Feed />} />
          <Route path="chat" element={<Chats />} />
          <Route path="chat:chatid" element={<Chat />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Register />} />
          <Route path="account" element={<Account />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
