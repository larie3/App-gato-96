
import React, { Component } from 'react';
import { Text, View, ImageBackground, Image ,StyleSheet} from 'react-native';


export default class Others extends Component {
render() {
return (
<ImageBackground source={require('../assets/rosa.png')}
style={styles.backgroundImage}>
<View
style={{
flex: 1,
justifyContent: "center",
alignItems: "center"
}}>
<Text>outros</Text>
</View>
</ImageBackground >
)
}
}
const styles = StyleSheet.create({
backgroundImage: { flex: 1, resizeMode: 'cover', },
})

