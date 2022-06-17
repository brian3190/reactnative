import React from 'react';
import { styleSheet, Image } from 'react-native';

export class Hero extends React.Component {
    render() {
        return(
            <Image
                style={styleSheet.heroImage}
                source={ require('./img/laptop2.jpg')}
        )
    }
}

const styles = StyleSheet.create ({
    heroImage: {
        width: undefined,
        height: undefined,
        flex: 8
    }
})