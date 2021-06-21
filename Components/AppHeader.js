import * as React from "react";
import {Text,TouchableOpacity,View,TextInput,StyleSheet} from "react-native";
import firebase from "firebase";
import db from "../config";
import { Header } from "react-native-elements";

export default class AppHeader extends React.Component{
    render(){
        return(
            <Header
            centerComponent={{text:"Barter System"}}
            backgroundColor="blue"
            >
                
            </Header>
        )
    }
}