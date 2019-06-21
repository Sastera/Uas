import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight } from 'react-native';
import axios from 'axios';

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          nim: '',
          nama_anggota: '',
          ttl_anggota: '',
          alamat: '',
          image: '',
          jabatan_anggota: '',
          id_jabatan: '',
          loading: false,
      }
    }
    upload(){
        axios.post('https://aris1037.000webhostapp.com/db/tambahAnggota.php', {
            nim: this.state.nim,
            nama_anggota: this.state.nama_anggota,
            ttl_anggota: this.state.ttl_anggota,
            alamat: this.state.alamat,
            jabatan_angota: this.state.jabatan_anggota,
            image: this.state.image,
            id_jabatan: this.state.id_jabatan
          })
          .then((response) => {
              console.log("Status update trx  "+response);
                console.log(response);
            }
          )
          .catch(function (error) {
            console.log(error);
          });
        }

  render() {
    const pesan = <Text style={{color:'red'}}> Post Data Berhasil </Text>;
    return (
      
      <View style={styles.container}>
          <View style={styles.vHeader}>
              <Text style={styles.txtHeader}>Tambah Anggota</Text>
          </View>
          <View style={styles.vInput}>
              <View style={styles.vItemInput}>
                  <Text style={styles.txtLabelInput}>NIM     :</Text>
                  <TextInput style={styles.txtInput} 
                          onChangeText = { (nim) => { this.setState({nim}) } }
                          placeholder="Masukkan NIM" 
                  />
              </View>
              <View style={styles.vItemInput}>
                  <Text style={styles.txtLabelInput}>NAMA  :</Text>
                  <TextInput style={styles.txtInput}
                          onChangeText = { (nama_anggota) => { this.setState({nama_anggota}) } } 
                          placeholder="Masukkan nama" 
                  />
              </View>
              <View style={styles.vItemInput}>
                  <Text style={styles.txtLabelInput}>TTL  :</Text>
                  <TextInput style={styles.txtInput}
                          onChangeText = { (ttl_anggota) => { this.setState({ttl_anggota}) } } 
                          placeholder="Masukkan TTL" 
                  />
              </View>
              <View style={styles.vItemInput}>
                  <Text style={styles.txtLabelInput}>AlAMAT  :</Text>
                  <TextInput style={styles.txtInput}
                          onChangeText = { (alamat) => { this.setState({alamat}) } } 
                          placeholder="Masukkan Alamat" 
                  />
              </View>
              <View style={styles.vItemInput}>
                  <Text style={styles.txtLabelInput}>JABATAN  :</Text>
                  <TextInput style={styles.txtInput}
                          onChangeText = { (jabatan_angota) => { this.setState({jabatan_angota}) } } 
                          placeholder="Masukkan jabatan" 
                  />
              </View>
              <View style={styles.vItemInput}>
                  <Text style={styles.txtLabelInput}>ID JABATAN  :</Text>
                  <TextInput style={styles.txtInput}
                          onChangeText = { (id_jabatan) => { this.setState({id_jabatan}) } } 
                          placeholder="Masukkan id_jabatan" 
                  />
              </View>
          </View>
          <View style={styles.vButton}>
              <TouchableHighlight
                          onPressIn={() =>{
                            this.upload()
                          }}
                          accessibilityLabel="hitung"
                          style={styles.vHitung}>

                          <Text style={styles.txtHeader}>TAMBAH</Text>
              </TouchableHighlight>
          </View>
          <View style={styles.vButton}>
              <TouchableHighlight
                          onPressIn={() =>{
                            this.handleSubmit()
                          }}
                          accessibilityLabel="hitung"
                          style={styles.vHitung}>

                          <Text style={styles.txtHeader}>UNGGAH FOTO</Text>
              </TouchableHighlight>
          </View>
          <View style={{flex:3}}>
              
                
              
          
          </View>
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  vHeader: {
      flex:0.8,
      backgroundColor:'#194B95',
      alignItems:'center',
      justifyContent:'center'
  },
  vInput: {
      flex:2,
      backgroundColor:'#E3F2FD',
      justifyContent:'flex-start',
  },
  vItemInput: {
      flex:1,
      flexDirection:'row',
  },
  txtLabelInput: {
      flex:2,
      height: 30,
      marginLeft:20,
      marginTop:10

  },
  txtInput: {
      flex:3,
      marginRight:20,
      marginTop:5,
      height:40,
      backgroundColor:'#fff',
      borderColor: 'gray',
  },
  vButton:{
      flex:0.7,
  },
  vHitung:{
      flex:1,
      backgroundColor:'#194B95',
      margin:10,
      alignItems:'center',
      justifyContent:'center'
  },
  vHasil:{
      flex:2,
      backgroundColor:'#E3F2FD',
      justifyContent:'center',
  },
  txtHeader: {
      fontSize:20,
      color : 'white'
  },
});
