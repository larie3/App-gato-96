import React, { Component } from 'react';
import { Text, View, ImageBackground, Image,StyleSheet } from 'react-native';

export default class Home extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../assets/telas de fundos/Rosa.png')}
                style={styles.backgroundImage}>
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <TouchableOpacity
                        style={styles.routeCard}
                        onPress={() => this.props.navigation.navigate('Meteors')}>
                        <Text style={styles.routeText}>Meteoros</Text>
                        <Text style={styles.knowMore}>{'Saiba Mais --->'}</Text>
                        <Text style={styles.bgDigit}>2</Text>
                        <Image
                            source={require('../assets/meteor_icon.png')}
                            style={styles.iconImage}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    droidSafeArea: {
      marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    },
    backgroundImage: {
      flex: 1,
      resizeMode: 'cover',
    },
    routeCard: {
      flex: 0.25,
      marginLeft: 50,
      marginRight: 50,
      marginTop: 50,
      borderRadius: 30,
      backgroundColor: 'white',
    },
    titleBar: {
      flex: 0.15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    titleText: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'white',
    },
    routeText: {
      fontSize: 35,
      fontWeight: 'bold',
      color: 'black',
      marginTop: 75,
      paddingLeft: 30,
    },
    knowMore: {
      paddingLeft: 30,
      color: 'red',
      fontSize: 15,
    },
    bgDigit: {
      position: 'absolute',
      color: 'rgba(183, 183, 183, 0.5)',
      fontSize: 150,
      right: 20,
      bottom: -15,
      zIndex: -1,
    },
    iconImage: {
      position: 'absolute',
      height: 200,
      width: 200,
      resizeMode: 'contain',
      right: 20,
      top: -80,
    },
  });
  