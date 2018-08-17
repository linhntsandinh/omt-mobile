import {connect} from 'react-redux';
import HomeView from '../View/HomeView';
import {AppCreators} from '../../redux/AppRedux'

const mapStateToProps = (state) => {
    return {
        full_name: state.auth.full_name
    }
};

const mapDispatchToProps = (dispatch) => {
    return {

        putNotify: () => dispatch(AppCreators.putNotify('title')),
        showDialog: () => dispatch(AppCreators.showDialog('Hello', 'Hello World')),
        hideDialog: () => dispatch(AppCreators.hideDialog())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView);
