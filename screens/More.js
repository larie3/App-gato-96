import React, { Component } from 'react';
import { Text, View, ImageBackground, Image, } from 'react-native';

export default class More extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../assets/telas de fundos/Azul.png')}
                style={styles.backgroundImage}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text>More</Text>
                </View>
            </ImageBackground>
        )
    }
}