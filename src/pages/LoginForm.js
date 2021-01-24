import React, {Component} from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
import Input from './Input';
import MyButton from './MyButton';
export default class LoginForm extends Component {
  render() {
    return (
      <View>
        <Text style={styles.signInText}>Oturum Aç</Text>
        <Input 
        returnKeyType={"next"} 
        onSubmitEditing ={()=> this.passwordInput.focus()} 
        autoCapitalize="none" 
        placeholder="👤 Kullanıcı Adı.." />

        <Input 
        returnKeyType={"go"} 
        secureTextEntry={true} 
        placeholder="🔒 Şifre" 
        inputRef = {input => this.passwordInput = input}/>
        <MyButton
        textColor={"#f1f1f1"}
        bgColor = {"#0065e0"}
        text={"Şimdi Giriş Yap"}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  signInText: {
    marginVertical: 10,
    fontSize: 15,
    color: '#333',
  },
});
