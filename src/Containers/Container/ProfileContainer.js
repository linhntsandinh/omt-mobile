import {connect} from 'react-redux';
import ProfileView from '../View/ProfileView';
import {logout} from "../../redux/actions/actions";

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.auth.isLoggedIn,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogout: () => {dispatch(logout());}
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileView);
