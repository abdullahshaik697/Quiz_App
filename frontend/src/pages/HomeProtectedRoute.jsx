
import { Navigate, Outlet } from 'react-router-dom'

const HomeProtectedRoute = () => {

    const token = document.cookie.includes("token")
    if(!token){
        return <Navigate to='/login' replace />
    }
    return <Outlet/>
  };
  
  export default HomeProtectedRoute;
  