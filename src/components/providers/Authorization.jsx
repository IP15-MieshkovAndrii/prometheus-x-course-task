import { Navigate} from 'react-router-dom';
import { getUsername } from '../LocalStorage/LocalStorage';
const Authorization = ({children}) => {
    const isAuthorized = !!getUsername();
    return isAuthorized ? children : <Navigate to="/signin" />;
};
export default Authorization;