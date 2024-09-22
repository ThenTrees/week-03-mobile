import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Image95 from '../assets/images/Image_95.png';
import Image96 from '../assets/images/Image_96.png';
import Image97 from '../assets/images/Image_97.png';

const Screen_01 = ({navigation}) => {
    return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textHeader}>Order your favorite!</Text>
                </View>
                <View style={styles.body}>
                    <Image source={Image96} 
                    style={{width:150, height:150, marginLeft: 200}} />
                    <Image source={Image95}
                    style={{width:150, height:150, marginRight: 200}} />
                    <Image source={Image97}
                    style={{width:250, height:150, marginLeft: 120, marginBottom: 20}} />
                </View>
                <View style = {styles.footer}>
                    <TouchableOpacity style={styles.button} onPress={
                        () => navigation.navigate('screen_02')
                    }>
                        <Text style={styles.textButton}>Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        alignItems: 'center',
        height: 150
    },
    textHeader: {
        fontSize: 36,
        fontWeight: '500',
        color: '#00FF00',
        marginTop: 50,
    },
    body: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    footer: {
        height: "20%",
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#fff'
    },
    button: {
        backgroundColor: '#00FF00', // Default button color
        padding: 15,                // Padding inside the button
        borderRadius: 20,           // Rounded corners
        alignItems: 'center',        // Center the text
        
    },
    textButton: {
        fontSize: 24,
        textAlign: 'center',
        alignItems: 'center',
        color: '#fff',             // White text color
        fontWeight: '700',
        width: 200,
    }
})


export default Screen_01;