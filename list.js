import React from 'react';
import { Text,View,FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';


//const axios = require('axios');
export default class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
        };
    }
    componentDidMount(){
    axios.get("https://aris1037.000webhostapp.com/db/getAnggota.php?id_jabatan=4")
    .then((response)=>{
      console.log(response.data);
      this.setState({ data:response.data });
    })
    .catch(function (error) {
    // handle error
    console.log(error);
  });

}

    render() {
        return (
            <View>
            <Text>Daftar Nama Anggota Kelas</Text>
                <FlatList
                    keyExtractor={(item, index) => index.toString()}
                   data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem
                            title={item.nama}
                            leftAvatar={{
                                source: { uri:'https://aris1037.000webhostapp.com/db/getAnggota.php?id_jabatan=4'},
                            }}
                        />
                    )
                    }
                />
            </View>
    
        )
    }
}
