import { Route, Routes, useNavigate } from "react-router-dom"
import Login from "./Login"
import Browse from "./Browse"
import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";

const Body = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  useEffect(()=>{
    console.log("into user update")
      onAuthStateChanged(auth, (user) => {
      if (user) {
          const {uid,displayName,email} = user;
          dispatch(addUser({"uid":uid,"displayName":displayName,"email":email}))
          navigate("/browse")
      } else {
          // User is signed out
          dispatch(removeUser())
          navigate("/")
      }
      });
  },[])
  return (
    <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/browse" element={<Browse />}/>
    </Routes>    
  )
}

export default Body