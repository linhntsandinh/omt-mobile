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
import Profile from '../Containers/Container/ProfileContainer';
import LoginView from "../Containers/Container/LoginContainer";
import CreateUserPage1 from "../Containers/Container/CreateUserPage1Container";
import CreateUserPage2 from "../Containers/Container/CreateUserPage2Container"
import CreateUserPage3 from "../Containers/Container/CreateUserPage3Container";
import EditMail from "../Containers/Container/EditMailContainer";
import FormDetailView from "../Containers/Container/FormDetailContainer";
import CheckinSummary from "../Containers/Container/CheckinSummaryContainer"

const getIconTab = (name) => ({tintColor}) => (
    <Icon name={name} color={tintColor} disable/>
);

const Navigation = createStackNavigator(
    {
        Splash: {
            screen: Splash
        },
        Login: {
            screen: LoginView
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
        EditMail: {
            screen: EditMail
        },
        FormDetailView: {
            screen: FormDetailView
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

                    Profile: {
                        screen: Profile,
                        navigationOptions: {
                            tabBarLabel: 'Profile',
                            tabBarIcon: getIconTab(Icons.profile)
                        }
                    },
                    Summary: {
                        screen: CheckinSummary,
                        navigationOptions: {
                            tabBarLabel: 'Event',
                            tabBarIcon: getIconTab(Icons.podium)
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
        initialRouteName: 'Splash',
        headerMode: 'none',
        cardStyle: {
            ...BaseStyles.disable_shadow,
            backgroundColor: Colors.background,
        },

    }
);

const mapStateToProps = (state) => ({nav: state.nav, isLoggedIn: state.auth.isLoggedIn});

export default connect(mapStateToProps)(Navigation);
