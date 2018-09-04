import {connect} from 'react-redux';
import CheckinSummary from '../View/CheckinSummary';
import {getAllUsersSummary} from "../../redux/actions/actions";

const mapStateToProps = (state) => {
    return {

    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllUsersSummary: (all_users_summary) => dispatch(getAllUsersSummary(all_users_summary))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckinSummary);
