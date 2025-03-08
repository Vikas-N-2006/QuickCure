import { createContext } from 'react';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
// import Header from './components/Home/Header/Header';
// import Footer from './components/Shared/Footer/Footer';
import Home from './components/Home/Home/Home';
import SignInForm from './components/Login/LoginMain/SignInForm';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AppointMent from './components/AppointMent/AppointMent/AppointMent';
import AllPatients from './components/AppointMent/AllPatients/AllPatients';
import AddDoctor from './components/Dashboard/AddDoctor/AddDoctor';
import DoctorList from './components/Dashboard/DoctorList/DoctorList';
import AddReview from './components/Dashboard/My Review/AddReview';
import ContactForm from "../src/components/Home/Contact/Contact"; 
import Blog from './components/Home/Blog/Blog';
import BusinessInfo from './components/Home/Businessinfo/BusinessInfo';
import Header from './components/Home/Header/Header';
import FeaturedService from './components/Home/FeaturedService/FeaturedService';
import Services from './components/Home/Services/Services';
import Testimonial from './components/Home/Testimonial/Testimonial';
// import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

// import PageNotFound from './components/Shared/PageNotFound/PageNotFound.jsx';
// import PreLoad from './components/Shared/Preload/PreLoad';

// const Home = lazy(() => import('./components/Home/Home/Home'))

export const UserContext = createContext();

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <SignInForm /> },
  { path: '/dashboard', element: <Dashboard /> },
  { path: '/patients', element: <AllPatients /> },
  { path: '/addDoctor', element: <AddDoctor /> },
  { path: '/doctors', element: <DoctorList /> },
  { path: '/auth/review', element: <AddReview /> },
  { path: '/blog', element: <Blog /> },
  { path: '/about', element: <Header /> },
  { path: '/services', element: <Services /> },
 { path: '/reviews', element: <Testimonial />},
  {
    path: '/appointment',
    element:<AppointMent/>
  },
  { path: "/contact", element: <ContactForm /> },
])

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    // <Suspense fallback={<PreLoad />}>
    // <Route exact path="*">
    // <PageNotFound />
  );
}
export default App;
