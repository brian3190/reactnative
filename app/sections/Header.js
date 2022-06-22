import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            loggedUser: false
        };
    }

    toggleUser = ()=>{
        // this.setState(previousState => {
        //     return { isLoggedIn: !previousState.isLoggedIn };
        // });
        if (this.state.isLoggedIn) {
            AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                this.setState({
                    isLoggedIn: false,
                    loggedUser: false
                });
                Alert.alert('User logged out');
            })
        }
        else {
            this.props.navigate('LoginRT')
        }
    }

    ComponentDidMount(){
        AsyncStorage.getItem('userLoggedIn', (err, result) => {
            if ( result==='none'){
                console.log('NONE');
            }
            else if (result === null){
                AsyncStorage.setItem('userLoggedIn', 'none', (err, result) => {
                    console.log('Set user to NONE');
                })
            }
            else {
                this.setState({
                    isLoggedIn: true,
                    loggedUser: result
                })
            }
        })
    }

    render() {
        let display = this.state.isLoggedIn ? this.state.loggedUser : this.props.message ;
        return (
            <View style={styles.headStyle}>
                <Image
                    style={styles.logoStyle}
                    source={ require('./img/globo_logo_REV.png')}
                />
                <Text
                    style={styles.logoText}
                    onPress={this.toggleUser}>Globomantics
                </Text>
                <Text
                    style={styles.headText}
                    onPress={this.toggleUser}>{display}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    headText: {
        paddingTop: 20,
        paddingRight: 10,
        textAlign: 'right',
        color: '#ffffff',
        fontSize: 20,
        flex: 1
    },
    headStyle: {
        paddingTop: 30,
        paddingRight: 10,
        paddingBottom: 10,
        backgroundColor: Platform.OS === 'android'? '#35605a' :'#31e981',
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderColor: '#000000'
    },
    logoText: {
        paddingTop: 20,
        textAlign: 'left',
        color: '#ffffff',
        fontSize: 20,
        flex: 1
    },
    logoStyle: {
        flex: 0.4,
        width: undefined,
        height: undefined,
    }
});