import {connect} from 'react-redux';
import LoginView from '../View/LoginView'
import {login, loginFail, loginSuccess} from "../../redux/actions/actions";


const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) =>  dispatch(login(username, password)) ,
        onLoginSuccess: (userData, permission, profile, status) => dispatch(loginSuccess(userData, permission, profile, status)),
        onLoginFail: (error) => dispatch(loginFail(error))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
