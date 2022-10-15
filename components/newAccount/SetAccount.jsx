import React from "react";
import { View, Text, StyleSheet, Dimensions, TextInput, ScrollView } from "react-native";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const SetAccount = ({ navigation }) => {
  return (
    <View>
      <View style={styles.backgroundView}>
        <Text style={styles.loginText}>
          Add New Account
        </Text>

      </View>
      <View style={styles.newAccountView}>
          <TextInput style={styles.loginInput} placeholder="Name" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundView: {
    backgroundColor: "#7F3DFF",
    height: height,
    width: width,
  },
  loginText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    top: height / 18,
    fontFamily: "Poppins-Regular",
  },
  newAccountView: {
    height: height / 3,
    width: width,
      zIndex:3,
      position:"absolute",
      backgroundColor: "white",
      top:height/1.5,
      borderTopLeftRadius:32,
      borderTopRightRadius:32,
  },
    loginInput: {
      borderColor: "#E0E0E0",
        borderWidth: 1,
        top:24,
        marginLeft: 20,
        marginRight: 20,
        borderRadius: 16,
        paddingLeft: 10,
        paddingRight: 10,
        fontFamily: "Poppins-Regular",
        fontSize: 15,
        paddingTop: 15,
        paddingBottom: 15,
    },
});

export default SetAccount;