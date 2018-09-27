import {connect} from 'react-redux';
import CheckinSummary from '../View/CheckinSummary';
import {getAllUsersSummary, getUserSummary} from "../../redux/actions/actions";

const mapStateToProps = (state) => {
    // console.log(this.props.all_users_summary)
    return {
        all_users_summary: state.auth.all_users_summary,
        user: state.auth.user,
        user_summary: state.auth.user_summary
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsersSummary: (all_users_summary) => dispatch(getAllUsersSummary(all_users_summary)),
        getUserSummary: (user_summary) => dispatch(getUserSummary(user_summary))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckinSummary);
