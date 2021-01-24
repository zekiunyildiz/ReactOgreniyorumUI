import React, { Component } from 'react'
import { Text,TextInput, View,StyleSheet } from 'react-native'

export default class Input extends Component {
    state = {
        text: ""
    };
    render() {
        return (
            <View>
                <TextInput
                {...this.props}
                placeholderTextColor="#A86F6F"
                style={styles.input}
                value = {this.state.text}
                ref ={this.props.inputRef}
                onChangeText = {text=> this.setState({text})}
                />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    input:{
        height:40,
        paddingHorizontal:5,
        borderWidth:2,
        borderRadius:10,
        borderColor:"#EBEBEB",
        marginBottom:8,
        fontSize:15,
        
    }

})