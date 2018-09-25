import {connect} from 'react-redux';
import EmployeeListView from '../View/EmployeeListView';

const mapStateToProps = (state) => {
    return {
        all_users: state.auth.all_users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeListView);
