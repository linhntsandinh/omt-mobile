import {connect} from 'react-redux';
import CheckinSummary from '../View/CheckinSummary';
import {getAllUsersSummary} from "../../redux/actions/actions";

const mapStateToProps = (state) => {
    // console.log(this.props.all_users_summary)
    return {
        all_users_summary: state.auth.all_users_summary
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsersSummary: (all_users_summary) => dispatch(getAllUsersSummary(all_users_summary))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckinSummary);
