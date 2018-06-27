import {StackNavigator} from 'react-navigation'
import Login from './Login'
import SignUp from './SignUp'
import ProfileScreen from './ProfileScreen'
import TimeKeeping from "./TimeKeeping";
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
        }
    },
    {
        initialRouteName: 'TimeKeeping'
    }
);
