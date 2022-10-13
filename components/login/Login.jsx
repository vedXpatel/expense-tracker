import React from 'react'
import { Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const Login = () => {
    return (
        <>
            <Text style={styles.loginText}>
                Login
            </Text>
            <TextInput style={styles.loginInput} placeholder="Email" />
            <TextInput secureTextEntry={true} style={styles.passwordInput} placeholder="Password" />
            <TouchableOpacity style={styles.loginButton}>
                <Text style={{ color: "white", fontSize: 18, fontFamily: "Poppins-Regular", textAlign: "center" }}>
                    Login
                </Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password ?</Text>
            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    loginText: {
        textAlign: "center",
        fontSize: 25,
        color: "black",
        top: height / 18,
        fontFamily: "Poppins-Regular",
    },
    loginInput: {
        borderColor: "#E0E0E0",
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        top: height / 5,
        borderRadius: 16,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: "Poppins-Regular",
        fontSize: 15,
        paddingTop: 15,
        paddingBottom: 15,
    },
    passwordInput: {
        borderColor: "#E0E0E0",
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        top: height / 5 + 24,
        borderRadius: 16,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: "Poppins-Regular",
        fontSize: 15,
        paddingTop: 15,
        paddingBottom: 15,
    },
    loginButton: {
        marginLeft: 20,
        marginRight: 20,
        backgroundColor: "#7F3DFF",
        borderRadius: 16,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: "Poppins-Regular",
        fontSize: 15,
        paddingTop: 15,
        paddingBottom: 15,
        top: height / 5 + 24 + 40,
    },
    forgotPassword: {
        top: height / 5 + 64 + 33,
        textAlign: "center",
        fontSize: 18,
        color: "#7F3DFF",
        fontWeight: "600",
    },
    signUpLink: {
        top: height / 5 + 64 + 33 + 38,

    }
})

export default Login;