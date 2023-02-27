import Home from '../views/Home'
import Login from '../views/authentication/Login'
import UserRegistration from '../views/authentication/registration/UserRegistration'
import VendorRegistration from '../views/authentication/registration/VendorRegistration'
import UserResetPassword1, {UserResetPassword2} from '../views/authentication/reset_password/user__reset_password/UserResetPassword_1'
import UserResetPassword3 from '../views/authentication/reset_password/user__reset_password/UserResetPassword_3'
import VendorResetPassword1, {VendorResetPassword2} from '../views/authentication/reset_password/vendor__reset_password/VendorResetPassword_1'
import VendorResetPassword3 from '../views/authentication/reset_password/vendor__reset_password/VendorResetPassword_3'
import UserHome from '../views/panels/user_panel/UserHome'
import PageNotFound from '../views/components/home/PageNotFound'

const { useRoutes } = require("react-router-dom");


const AllRoutes = () =>{
    const routes = useRoutes([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/userRegistration",
            element: <UserRegistration />
        },
        {
            path: "/vendorRegistration",
            element: <VendorRegistration />
        },
        {
            path: "/user_resetPassword_1",
            element: <UserResetPassword1 />
        },
        {
            path: "/user_resetPassword_2",
            element: <UserResetPassword2 />
        },
        {
            path: "/user_resetPassword_3/:id",
            element: <UserResetPassword3 />
        },
       
        {
            path: "/vendor_resetPassword_1",
            element: <VendorResetPassword1 />
        },
        {
            path: "/vendor_resetPassword_2",
            element: <VendorResetPassword2 />
        },
        {
            path: "/vendor_resetPassword_3/:id",
            element: <VendorResetPassword3 />
        },
      
        {
            path: "/user_home",
            element: <UserHome />
        },
        {
            path: "*",
            element: <PageNotFound />
        },
    
    ])
    return routes
} 

export default AllRoutes