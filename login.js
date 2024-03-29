import React, { Component } from "react";
import {View,Text,StyleSheet,TouchableHighlight,TextInput,ScrollView,Alert,Image} from "react-native";
import Header from "./Header";
import {ImageBackground} from 'react-native';  
class Login extends Component {
  static navigationOptions = {
      header: null
  }
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          password: '',

      };
    }
    Login= () =>{
      if(this.state.username == 'Admin' && this.state.password == 'Admin'){
        this.props.navigation.navigate('Utama')
      }else{
        Alert.alert('Nama Pengguna atau Kata Sandi anda salah!!!');
    }
  }
  render() {     
      return (
        <ImageBackground source={require("./img/Background.jpg")} style={{width:'100%',height:'100%'}}>   
        <View style={styles.vMain}>
        <ScrollView>       
            <View style={styles.vHeader}>
                <Header header={"PM"} />
                    <Image 
            			style={styles.gambar} 
            			source={require("./img/Logo2.png")} 
            			resizeMode = "stretch" 
        			/> 
            <View style={styles.box}>
               	<View style={styles.box1}>
                    <Text style={styles.textInput}>Nama Pengguna</Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Masukan Nama Pengguna"  
                  onChangeText={username => this.setState({ username})}
                  />
                </View>
                <View style={styles.box1}>
                <Text style={styles.textInput}>Kata Sandi</Text>
                  <TextInput
                  style={styles.txtBox1}
                  placeholder="Masukan Kata Sandi"
                  onChangeText={password => this.setState({ password })}
                  />
                </View>
                <View style={styles.box2}>
                  <TouchableHighlight
                  activeOpacity={0.5}
                  style={styles.vButton}
                            onPress={() => this.Login()}>
                  <Text style={styles.txtButton}>Masuk</Text>
                  </TouchableHighlight>
                  </View>
                </View>   
            </View>
         
        </ScrollView>
      
        </View>
        </ImageBackground>
        
        );
      }
  }
   const styles = StyleSheet.create({
    vMain:{
      //flex: 1,
      
    },
    vHeader: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        flex: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:500,
        borderRadius: 5,
        borderColor: '#cdbe97',
        margin:10
    },
    box1: {
        flex: 0.5,
        width: "90%",
        marginTop: 10,
        marginLeft: 10,
        paddingTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderRadius: 5,
    },
    gambar:{
        height: 150,
        width: 150,
    },
    txtBox1: {
      width: 220,
      height: 50,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: '#6fa9aa',
      alignItems: 'center',
      justifyContent: 'center', 
      
    },
    textBox1:{
      color: 'white',
      fontSize: 15,    
    },
    textInput:{
        color: 'white',
        fontSize: 15,    
      },
    box2: {
      flex: 0.8,
      margin:10,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderRadius: 5,
    },
    txtButton: {
      textAlign: 'center',
      marginTop: 10,
      color: 'black',
      fontSize: 20,
      width: '100%',
      height: 40, 
    },
    vButton: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      borderRadius: 5,
      padding:20,
      margin:20,
      width: '100%',
      height: 50, 
    },
    txtTeks: {
      color: 'black',
      marginLeft:60,
      fontSize: 15,
      marginBottom:10,
    }
});
export default Login;
