import React, {Component} from 'react';
import {View} from '../../Components'
import {BaseStyles} from '../../Theme'

export default class EventView extends Component {
    constructor(props){
        super(props)
        this.a =null
    }
    render() {
        return (
            <View
                style={BaseStyles.screen.mainContainer}
            >
                {/*<Button*/}
                    {/*// ref={(comp) => this.isShow = comp}*/}
                    {/*title="Show Dialog"*/}
                    {/*onPress={() => {*/}
                        {/*this.setState({a:true});*/}
                        {/*this.popup.show();*/}
                    {/*}}*/}
                {/*/>*/}
                {/*<Popup ref={ref => (this.popup = ref)}  name={this.state.a}/>*/}
            </View>
        );
    }
}
