import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './Main';
import Post from './Post';
import Daftar from './List';
import DetailWadaya from './DetailList';
import LoginScreen from './Login'

const AppNavigator = createStackNavigator(
        {
            Utama: MainScreen,
            Post:Post,
            Daftar:Daftar,
            DetailWadaya:DetailWadaya,
            LoginScreen:LoginScreen
            
        },
        {
            initialRouteName: "LoginScreen"
        }
        );
export default createAppContainer(AppNavigator);
