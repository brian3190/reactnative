import React from 'react';
import { StyleSheet, Text, ScrollView, Image } from 'react-native';

const aboutGlobo = `We are a tech solutions company.`

const whatGlobo = `We provide tech solutions to tech companies.`

export class About extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.pics} source={require('../sections/img/arch640.jpg')}/>

                <Text style={styles.aboutTitle}>Who We Are</Text>
                <Text style={styles.aboutText}>{aboutGlobo}</Text>

                <Image style={styles.pics} source={require('../sections/img/computer640.jpg')}/>
                <Text style={styles.aboutTitle}>What We Do</Text>
                <Text style={styles.aboutText}>{whatGlobo}</Text>
                <Text onPress={() => this.props.navigation.goBack()} style={styles.backButton}>Go BACK</Text>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        paddingBottom: 30,
        backgroundColor: '#ffffff'
    },
    pics: {
        height: 300
    },
    aboutTitle: {
        paddingTop: 10,
        textAlign: 'center',
        fontSize: 'bold'
    },
    aboutText: {
        paddingBottom: 20,
    },
    backButton: {
        paddingBottom: 50,
        textAlign: 'center'
    }
})