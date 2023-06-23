import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import DashboardMain from '../MainDashboard/mainDashboard';
import LoginForm from '../SignIn/signIn';
import Register from '../signUp/signUp';
import Overview from '../hotelDetails/overview';
import RoomCard from '../hotelDetails/rooms';
import HotelDashboard from '../hotelDetails/hotelDashboard';

function RouterFile(){
    return(
        <>
        <Router>
            <Routes>
                <Route exact path='/' element={<DashboardMain></DashboardMain>}></Route>
                <Route path='/signin' element={<LoginForm></LoginForm>}></Route>
                <Route path='/signup' element={<Register></Register>}></Route>
                <Route path='/overview' element={<Overview></Overview>}></Route>
                <Route path='/rooms' element={<RoomCard></RoomCard>}></Route>
                <Route path='/hotelview' element={<HotelDashboard></HotelDashboard>}></Route>
                <Route path='/dashboard' element={<DashboardMain></DashboardMain>}></Route>
            </Routes>
        </Router>
        </>
    )
}
export default RouterFile;