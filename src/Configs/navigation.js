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
import CreateUser from "../Containers/Container/CreateUserContainer";


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
        CreateUser: {
            screen: CreateUser
        },
        TabMain: {
            screen: createBottomTabNavigator({
                TabHome: {
                    screen: Home,
                    navigationOptions: {
                        tabBarLabel: 'TimeKeeping',
                        tabBarIcon: getIconTab(Icons.clock)
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
                        activeTintColor: 'black',
                        inactiveTintColor: Colors.border,
                        showLabel: false,
                        showIcon: true,
                        style: {
                            ...BaseStyles.disable_shadow,
                            backgroundColor: Colors.white,
                            height: Metrics.navBarHeight
                        }
                    },

                }
            )
        }
    },
    {
        initialRouteName: 'TabMain',
        headerMode: 'none',
        cardStyle: {
            ...BaseStyles.disable_shadow,
            backgroundColor: Colors.background,
        },

    }
);

const mapStateToProps = (state) => ({ nav: state.nav });

export default connect(mapStateToProps)(Navigation);
