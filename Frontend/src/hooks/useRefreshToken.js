import { publicRequest } from "../request-method";
import {setToken} from '../features/tokenSlice'
import { useDispatch} from 'react-redux';

const useRefreshToken = () => {
    const dispatch = useDispatch();

    const refresh = async () => {
        const response = await publicRequest.get('/user/login/refresh',{
            withCredentials:true
        });

        dispatch(setToken(response.data.token));


    }
    return refresh;

};

export default useRefreshToken;