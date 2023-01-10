import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProfilePage from '../pages/ProfilePage';
import ErrorPage from '../pages/ErrorPage';
import LoginPage from '../pages/LoginPage';

export default function Router() {
    return(

        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path='profile/:name' element={<ProfilePage/>}/>
                <Route path='login' element={<LoginPage/>}/>
                <Route path='*' element={<ErrorPage/>}/>
            </Routes>
        </BrowserRouter>

    )        
}