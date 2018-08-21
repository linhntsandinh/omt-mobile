import {connect} from 'react-redux';
import HomeView from '../View/HomeView';
import {AppCreators} from '../../redux/AppRedux'
import {checkin} from "../../redux/actions/actions";

const mapStateToProps = (state) => {
    console.log(state.auth.user);
    return {
        user: state.auth.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onCheckin: (userId, date, startTime, endTime, deviceInfo, createBy, updateBy) => dispatch(checkin(userId, date, startTime, endTime, deviceInfo, createBy, updateBy)),
        putNotify: () => dispatch(AppCreators.putNotify('title')),
        showDialog: () => dispatch(AppCreators.showDialog('Hello', 'Hello World')),
        hideDialog: () => dispatch(AppCreators.hideDialog())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
