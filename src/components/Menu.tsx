import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Menu = () => (
    <LinearGradient colors={['#fce4ec', '#f8bbd0']} style={styles.container}>
        <View style={styles.content}>
            <Image source={require('../assets/images/logo.png')} style={styles.image}/>
            <Text style={styles.title}>ForeignHer</Text>
            <Text style={styles.title}>अतिथि देवो भव</Text>
            <TouchableOpacity onPress={() => console.log("Chatbot")}>
                <LinearGradient colors={['#e91e63', '#880e4f']} style={styles.button}>
                    <Text style={styles.buttonText}>Chatbot</Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log("Translate")}>
                <LinearGradient colors={['#e91e63', '#880e4f']} style={styles.button}>
                    <Text style={styles.buttonText}>Translate</Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log("Maps")}>
                <LinearGradient colors={['#e91e63', '#880e4f']} style={styles.button}>
                    <Text style={styles.buttonText}>Maps</Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => console.log("SOS")}>
                <LinearGradient colors={['#e91e63', '#880e4f']} style={styles.button}>
                    <Text style={styles.buttonText}>SOS</Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    </LinearGradient>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 42,
        fontWeight: 'bold',
        color: '#880e4f',
        marginBottom: 40,
    },
    button: {
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 25,
        marginVertical: 10,
        width: 220,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '600',
    },
    image:{
        width:200,
        height:200,
    }
});

export default Menu;
