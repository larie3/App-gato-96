import React, { Component } from 'react';
import { Text, View, ImageBackground, Image } from 'react-native';

export default class CreatePost extends Component {
    render() {
        return (
            <ImageBackground source={require('../assets/telas de fundos/Roxo.png')}
            style={styles.backgroundImage}>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>Create Post</Text>
            </View>
            </ImageBackground >
        )
    }
}