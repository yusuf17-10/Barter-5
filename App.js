import * as React from 'react';
import {View,StyleSheet} from 'react-native';
import {createSwitchNavigator,createAppContainer} from "react-navigation"
import SignUpLoginScreen from "./Screens/SignUpLoginScreen";
import {createBottomTabNavigator} from "react-navigation-tabs";
import HomeScreen from "./Screens/HomeScreen";
import ExchangeScreen from "./Screens/exchangeScreen";
import {createDrawerNavigator} from "react-navigation-drawer";
import SideBar from './Components/CustomSideBarmenu';
import Settingscreen from './Screens/SettingScreen';
import { selectAssetSource } from 'expo-asset/build/AssetSources';
export default class App extends React.Component {
  render() {
    return (

     <AppContainer/>

    );
  }

}

var AppTabNavigator=createBottomTabNavigator({
  HomeScreen:{screen:HomeScreen},
  ExchangeScreen:{screen:ExchangeScreen}
})

var DrawerNavigator = createDrawerNavigator({
  home:{screen:AppTabNavigator},
  Settings:{screen:Settingscreen},
},
  {
    contentComponent:SideBar
  },
  {initialRouteName:"home"}
)

var SwitchNavigator = createSwitchNavigator({
  SignUpLoginScreen:{screen:SignUpLoginScreen},
  DrawerNavigator:{screen:DrawerNavigator}
})                   

var AppContainer=createAppContainer(SwitchNavigator)