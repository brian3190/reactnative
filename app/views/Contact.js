import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Alert } from 'react-native';
import { Header } from '../sections/Header.js';
import { StackNavigator } from 'react-navigation';

export class Contact extends React.Component{
    static navigationOptions = {
        header: null
    };
    constructor(props){
        super(props);
        this.state = {
            msg: 'Enter Message',
            name: 'Enter Name',
            email: 'Enter your Email Address'
        }
    }

    clearFields=()=> this.setState({name:'',msg:'',email:''});

    sendMessage= ()=> {
        Alert.alert(this.state.name, this.state.msg);
        this.props.navigation.goBack();
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Header navigate = {navigate} message = 'Login' />
                <Text style={styles.heading}>Contact Us</Text>
                
                <TextInput
                    style={styles.inputs}
                    onChangeText={(text) => this.setState({name: text})}
                    value={this.state.name}
                />

                <TextInput
                    style={styles.multiInput}
                    onChangeText={(text) => this.setState({msg: text})}
                    value={this.state.msg}
                    multiline= {true}
                    numberOfLines = {4}
                />

                <TextInput
                    style={styles.inputsEmail}
                    onChangeText={(text) => this.setState({email: text})}
                    value={this.state.email}
                />

                <TouchableHighlight onPress={this.sendMessage} underlayColor='#31e981'>
                    <Text style={styles.buttons}>
                        Send Message
                    </Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.clearFields} underlayColor='#31e981'>
                    <Text style={styles.buttons}>
                        Reset Form
                    </Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingBottom: '45%',
        backgroundColor: '#35605a',
    },
    heading: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
        backgroundColor: "#318752",
        textAlign: 'center justify',
        margin: 10,
        padding: 10
    },
    inputs: {
        flex: 1,
        width: '80%',
        padding: 10,
        backgroundColor: '#FFFFFF',
    },
    inputsEmail: {
        flex: 1,
        width: '80%',
        padding: 10,
        backgroundColor: '#FFFFFF',
        marginBottom: 10
    },
    multiInput: {
        flex: 2,
        width: '80%',
        padding: 10,
        margin: 20,
        backgroundColor: '#FFFFFF',
    },
    buttons: {
        backgroundColor: '#42f5a1',
        margin: 10,
        padding: 10
    }
});