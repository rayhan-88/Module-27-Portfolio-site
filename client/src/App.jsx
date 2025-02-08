import {BrowserRouter , Routes , Route} from 'react-router-dom'
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import BlogPage from "./pages/BlogPage.jsx";
import ServicePage from "./pages/ServicePage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegistrationPage from "./pages/RegistrationPage.jsx";
import {Toaster} from "react-hot-toast";
import DashboardPage from "./pages/DashboardPage.jsx";

const App = () => {
    return (
        <BrowserRouter>
            <Toaster position='bottom-center' reverseOrder={false} />
            <Routes>
                <Route exact path='/' element={<HomePage/>} />
                <Route exact path='/about' element={<AboutPage/>} />
                <Route exact path='/blog' element={<BlogPage/>} />
                <Route exact path='/service' element={<ServicePage/>} />
                <Route exact path='/contact' element={<ContactPage/>} />
                <Route exact path='/login' element={<LoginPage/>} />
                <Route exact path='/registration' element={<RegistrationPage/>} />
                <Route exact path='/dashboard' element={<DashboardPage/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;