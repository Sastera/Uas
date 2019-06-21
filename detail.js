import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import {ListItem } from 'react-native-elements'
import axios from 'axios';


export default class List extends React.Component {
  constructor(props) {
    super(props)
    prefik_url = 'http://wadaya.rey1024.com/api/uploads/';
    this.state = {
        categories: [],
        id_kategori:this.props.navigation.state.params.id_kategori,
        nama:this.props.navigation.state.params.nama,
    };
  }
  componentDidMount() {
    axios.get('http://mhs.rey1024.com/apibudaya/getListBudaya.php?id_kategori='+this.state.id_kategori)
      .then(res => {
        const categories = res.data;
        console.log(categories);
        this.setState({ categories });
      })
      .catch(function (error){
          console.log(error);
      })
  }

  render() {
    return (
        <View style={styles.container} >
          <View style={styles.header}>
            <Text style={styles.txtHeader}> Budaya {this.state.nama} </Text>
          </View>
          <FlatList 
              keyExtractor = {(item, index) => index.toString()}
              data={this.state.categories}
              renderItem = {({ item }) => (
                <ListItem 
                  title={item.nama_budaya}
                  leftAvatar={{ source: { uri: 'http://wadaya.rey1024.com/api/uploads/'+item.url_gambar } }}
                />
              )}
          />
       </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
       flex: 1,
  },
  txtHeader: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#fff'
  },
  header: {
    height:70,
    backgroundColor:'brown',
    justifyContent:'center',
    alignItems:'center'
  },
});
