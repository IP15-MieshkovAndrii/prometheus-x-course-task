import BookListPage from '../../pages/BookList/BookListPage';
import SigninPage from '../../pages/Signin/SigninPage';
import { getUsername } from '../LocalStorage/LocalStorage';
const Main = () => {
    const isAuthorized = !!getUsername();
    if (!isAuthorized){
        return (
            <SigninPage/>
        ) }
    else {
        return (
            <BookListPage/>
        )
    }
}

export default Main;