import {connect} from 'react-redux';
import LoginView from '../View/LoginView'
import {getAllUsers, login, loginFail, loginSuccess} from "../../redux/actions/actions";


const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (username, password) =>  dispatch(login(username, password)) ,
        onLoginSuccess: (user) => dispatch(loginSuccess(user)),
        onLoginFail: (error) => dispatch(loginFail(error)),
        getAllUsers: (all_users) => dispatch(getAllUsers(all_users))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginView);
