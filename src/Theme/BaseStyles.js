import Metrics from './Metrics'
import Colors from './Colors'
import Fonts from './Fonts'
import {width} from "../Configs/Consts"

export default {
    screen: {
        mainContainer: {
            flex: 1,
            backgroundColor: Colors.transparent,
            paddingTop: Metrics.statusBarHeight
        },
        touchableButton: {
            width: width - 200,
            height: 60,
            borderColor: '#2699FB',
            borderWidth: 2,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 60,
            marginBottom: 10,
            borderRadius: 10,
            elevation: 5
        },
        touchableButtonText: {
            fontSize: 20,
            textAlign: 'center',
            color: '#2699FB',
            fontFamily: 'Montserrat-Bold'
        },
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#434856'
        },
        backgroundImage: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
            right: 0
        },
        containers: {
            flex: 1,
            paddingTop: Metrics.baseMargin,
            backgroundColor: Colors.transparent
        },
        section: {
            margin: Metrics.section,
            padding: Metrics.baseMargin
        },
        sectionText: {
            ...Fonts.style.normal,
            paddingVertical: Metrics.doubleBaseMargin,
            color: Colors.snow,
            marginVertical: Metrics.smallMargin,
            textAlign: 'center'
        },
        subtitle: {
            color: Colors.snow,
            padding: Metrics.smallMargin,
            marginBottom: Metrics.smallMargin,
            marginHorizontal: Metrics.smallMargin
        },
        titleText: {
            ...Fonts.style.h2,
            fontSize: 14,
            color: Colors.text
        },


    },
    disable_shadow: {
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 0,
        shadowOpacity: 0,
        shadowColor: '#000000',
        elevation: 0,
    },
    shadow: {
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 1,
        shadowOpacity: 0.2,
        shadowColor: '#000000',
        elevation: 4
    }
};
