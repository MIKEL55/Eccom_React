import { useEffect } from 'react';
import {privateRequest} from '../request-method';
import useRefreshToken from './useRefreshToken';
import { useSelector } from 'react-redux';


const useAxiosPrivate = () => {
    console.log('test');
    const refresh = useRefreshToken();
    const authtoken = useSelector((store) => store.authtoken);


    useEffect(()=>{

        const requestIntercept = privateRequest.interceptors.request.use(
            config => {
                if(!config.headers['Authorization']){
                    config.headers['Authorization'] = `Bearer ${authtoken?.currentToken}`;
                }
                return config;

            },(error) => Promise.reject(error)

        );

        const responseIntercept = privateRequest.interceptors.response.use(
            response => response,
            async(error) => {
                let prevRequest = error?.config;
                if(error?.response === 403 && prevRequest?.sent)
                {
                    prevRequest = true;
                    const newAccessToken = await refresh();
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return privateRequest(prevRequest);

                }
                return Promise.reject(error);

            }
        );

        return () => {
            privateRequest.interceptors.response.eject(responseIntercept);
            privateRequest.interceptors.request.eject(requestIntercept);
        }

    },[]);

    return privateRequest;
}

export default useAxiosPrivate;