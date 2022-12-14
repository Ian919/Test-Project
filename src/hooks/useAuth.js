import {useContext} from 'react'
import { AuthContext } from '../context/AuthContexts'

const useAuth = () => {
    return useContext(AuthContext)
}

export default useAuth
