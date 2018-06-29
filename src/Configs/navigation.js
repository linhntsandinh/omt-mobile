import React from 'react';
import {connect} from 'react-redux';
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation';
import {Icon} from '../Components'
import {BaseStyles, Colors, Metrics,} from '../Theme';
import {Icons} from '../Assets'
//all screen
import Splash from '../Containers/SplashContainer';
import Home from '../Containers/HomeContainer';
import ListForm from '../Containers/ListFormContainer';
import Event from '../Containers/EventContainer';
import Profile from '../Containers/ProfileContainer';
import LoginView from "../Containers/View/LoginView";
import ForgotPasswordView from "../Containers/View/ForgotPasswordView";


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
        initialRouteName: 'Splash',
        headerMode: 'none',
        cardStyle: {
            ...BaseStyles.disable_shadow,
            backgroundColor: Colors.background,
        },

    }
);

const mapStateToProps = (state) => ({ nav: state.nav });

export default connect(mapStateToProps)(Navigation);
