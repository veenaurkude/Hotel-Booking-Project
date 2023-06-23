
import { Login } from '@mui/icons-material';
import DatePickerValue from './component/HotelList/basicdate';
import Counter from './component/HotelList/incrementhotel';
import Layout from './component/HotelList/mainHotelPage';
import BasicTextFields from './component/HotelList/roomSchedule';
import DashboardMain from './component/MainDashboard/mainDashboard';
import Sidebar from './component/sidebar/sidebar';
import LoginForm from './component/SignIn/signIn';
import RouterFile from './component/Router/router';
import Register from './component/signUp/signUp';
import NavTabs from './component/hotelDetails/navTabs';
import HotelDashboard from './component/hotelDetails/hotelDashboard';
import Overview from './component/hotelDetails/overview';

function App() {
  return (
    <>
    {/* <Layout></Layout> */}
    {/* <DashboardMain></DashboardMain> */}
    {/* <Sidebar></Sidebar> */}
    {/* <DatePickerValue></DatePickerValue> */}
    {/* <BasicTextFields></BasicTextFields> */}
    {/* <Counter></Counter> */}
    {/* <LoginForm></LoginForm> */}
    <RouterFile></RouterFile>
    {/* <Register></Register> */}
    {/* <HotelDashboard></HotelDashboard> */}
    </>
    
  );
}

export default App;
