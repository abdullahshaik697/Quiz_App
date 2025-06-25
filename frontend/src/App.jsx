import { Navigate, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Home from "./pages/Home"
import HomeProtectedRoute from "./pages/HomeProtectedRoute"
import Maths  from "./pages/quizPages/Maths"
import GK  from "./pages/quizPages/GK"
import IQ  from "./pages/quizPages/IQ"
import CS from "./pages/quizPages/CS"
import Nodejs  from "./pages/quizPages/Nodejs"
import Reactjs from "./pages/quizPages/Reactjs"

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Navigate to="signup"/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route element={<HomeProtectedRoute/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/home/Maths' element={<Maths/>}/>
          <Route path='/home/Computer Science' element={<CS/>}/>
          <Route path='/home/IQ' element={<IQ/>}/>
          <Route path='/home/ReactJS' element={<Reactjs/>}/>
          <Route path='/home/NodeJS' element={<Nodejs/>}/>
          <Route path='/home/GK' element={<GK/>}/>

      </Route>
    </Routes>
    </>
  )
}

export default App
