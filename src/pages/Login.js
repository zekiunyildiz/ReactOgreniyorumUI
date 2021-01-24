import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import LoginForm from "./LoginForm";

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container} >
        <View style={styles.headBackground} ></View>
        <KeyboardAvoidingView behavior={"position"} >
        <View>
          <Image style={styles.logoImage} source= {require("../pic/zeki.png")} ></Image>
          <Text style={styles.logoDescription} >💻  Learn step by step...</Text>
        </View>
        <ScrollView>
          <View style={styles.loginArea} >
            <Text style={styles.loginAreaTitle} >React Öğreniyorum</Text>
            <Text style={styles.loginAreaDescription}>React, Interactive UI tasarımlarını acısız bir şekilde yapmanızı sağlar.</Text>
            <LoginForm/>
          </View>
        </ScrollView>
        <View style={styles.signUpArea} >
            <Text style={styles.signUpDescription} >Hesabınız yoksa kaydolunuz !</Text>
            <TouchableOpacity>
                <Text style ={styles.signUpText} >Kaydol !</Text>
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical:80,
    backgroundColor:"#46a4fa"
  },
  headBackground:{
    position:"absolute",
    top:-200,
    left:-160,
    height:500,
    width: "150%",
    borderRadius: 100 / 0.3,
    backgroundColor: "#740000",
  },
  logoImage:{
    marginLeft:100,
    width: 150,
    height: 70,
    resizeMode: "contain",
  },
  logoDescription:{
    textAlign:"center",
    color: "#e0f020",
    fontWeight:"bold"
  },
  loginArea:{
    backgroundColor: "#fff",
    marginHorizontal:50,
    marginVertical:30,
    padding:15,
    borderRadius:15,

    /*shadowColor:"black",
    shadowOpacity: .9,
    shadowRadius: 3,
    shadowOffset:{
      width:9,
      height:9
    }*/
    elevation:10,
  },
  loginAreaTitle: {
      fontSize:20,
      textAlign:"center"
  },
  loginAreaDescription:{
      color:"#9B9898",
      fontSize:11,
      marginVertical:5,
      textAlign:"center"
  },
  signUpArea: {
      alignItems:"center"
  },
  signUpDescription:{
      color:"#E65858"
  },
  signUpText:{
      color: "#870606",
      fontSize:18
  }
  
});