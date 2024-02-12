import {Outlet, Navigate} from "react-router-dom";

import { useSelector } from 'react-redux';

const RequireAuth = () => {
    const auth = useSelector((store) => store.auth);
    const user = auth.currentUser;

    return ( user ? <Outlet/> : <Navigate to='/'/>
    );


}

export default RequireAuth;
