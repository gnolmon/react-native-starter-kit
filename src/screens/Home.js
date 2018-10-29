import React, {Component} from 'react';
import {Button, View, StyleSheet} from 'react-native';
import authStore from '../store/authStore';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default class Home extends Component {
    static navigationOptions = {
        title: 'Trang chủ',
        drawerLabel: 'Home',
    };

    constructor(props) {
        super(props);
        this.state = ({isDateTimePickerVisible: false})
    }
    render() {
        return (
            <View style={styles.container}>
                <Button title='Đăng xuất' onPress={() => {
                    authStore.logout();
                }}/>
                <Button title='Show DatePicker' onPress={this._showDateTimePicker}/>
                <DateTimePicker
                    isVisible={this.state.isDateTimePickerVisible}
                    onConfirm={this._handleDatePicked}
                    onCancel={this._hideDateTimePicker}
                />
            </View>
        );
    }

    _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });

    _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });

    _handleDatePicked = (date) => {
        console.log('A date has been picked: ', date);
        this._hideDateTimePicker();
    };
};

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});