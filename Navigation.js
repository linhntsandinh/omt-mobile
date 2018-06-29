import {StackNavigator} from 'react-navigation'
import Login from './Login'
import SignUp from './ForgotPassword'
import ProfileScreen from './ProfileScreen'
import TimeKeeping from "./TimeKeeping";
import DanhSachDon from "./ListForm";

export default Navigator = StackNavigator(
    {
        LoginScreen: {
            screen: Login
        },
        SignUpScreen: {
            screen: SignUp
        },
        ProfileScreen: {
            screen: ProfileScreen
        },
        TimeKeeping: {
            screen: TimeKeeping
        },
        DanhSachDon: {
            screen: DanhSachDon
        }
    },
    {
        initialRouteName: 'LoginScreen'
    }
);
