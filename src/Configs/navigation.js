import React from 'react';
import {connect} from 'react-redux';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import {Icon} from '../Components'
import {BaseStyles, Colors, Metrics,} from '../Theme';
import {Icons} from '../Assets'
//all screen
import Splash from '../Containers/Container/SplashContainer';
import Home from '../Containers/Container/HomeContainer';
import ListForm from '../Containers/Container/ListFormContainer';
import Event from '../Containers/Container/EventContainer';
import Profile from '../Containers/Container/ProfileContainer';
import LoginView from "../Containers/Container/LoginContainer";
import ForgotPasswordView from "../Containers/Container/ForgotPasswordContainer";
import CreateUserPage1 from "../Containers/Container/CreateUserPage1Container";
import CreateUserPage2 from "../Containers/Container/CreateUserPage2Container"
import CreateUserPage3 from "../Containers/Container/CreateUserPage3Container";
import ResetPassword from "../Containers/Container/ResetPasswordContainer";
import EditMail from "../Containers/Container/EditMailContainer";

const getIconTab = (name) => ({ tintColor }) => (
    <Icon name={name} color={tintColor} disable />
);

const Navigation = createStackNavigator(
    {
        Splash: {
            screen: Splash
        },
        Login: {
            screen: LoginView
        },
        ForgotPassword: {
            screen: ForgotPasswordView
        },
        CreateUserPage1: {
            screen: CreateUserPage1
        },
        CreateUserPage2: {
            screen: CreateUserPage2
        },
        CreateUserPage3: {
            screen: CreateUserPage3
        },
        ResetPassword: {
            screen: ResetPassword
        },
        EditMail: {
            screen: EditMail
        },
        TabMain: {
            screen: createBottomTabNavigator({
                TabHome: {
                    screen: Home,
                    navigationOptions: {
                        tabBarLabel: 'TimeKeeping',
                        tabBarIcon: getIconTab(Icons.calendar)
                    }
                },
                ListForm: {
                    screen: ListForm,
                    navigationOptions: {
                        tabBarLabel: 'ListForm',
                        tabBarIcon: getIconTab(Icons.pencil)
                    }
                },
                Notification: {
                    screen: Event,
                    navigationOptions: {
                        tabBarLabel: 'Event',
                        tabBarIcon: getIconTab(Icons.event)
                    }
                },
                Profile: {
                    screen: Profile,
                    navigationOptions: {
                        tabBarLabel: 'Profile',
                        tabBarIcon: getIconTab(Icons.profile)
                    }
                },
            }, {
                    swipeEnabled: false,
                    lazy: true,
                    tabBarOptions: {
                        activeTintColor: 'white',
                        inactiveTintColor: Colors.active,
                        showLabel: false,
                        showIcon: true,
                        style: {
                            ...BaseStyles.disable_shadow,
                            backgroundColor: Colors.footer,
                            height: Metrics.navBarHeight
                        }
                    },

                }
            )
        }
    },
    {
        initialRouteName: 'Login',
        headerMode: 'none',
        cardStyle: {
            ...BaseStyles.disable_shadow,
            backgroundColor: Colors.background,
        },

    }
);

const mapStateToProps = (state) => ({ nav: state.nav });

export default connect(mapStateToProps)(Navigation);
