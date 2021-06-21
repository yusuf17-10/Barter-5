import * as React from "react";
import {Text,TouchableOpacity,View,TextInput,StyleSheet} from "react-native";
import firebase from "firebase";
import db from "../config";
import {DrawerItems} from "react-navigation-drawer"

export default class SideBar extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <DrawerItems
                {...this.props}
                />
    <View>
        <TouchableOpacity onPress={()=>{
            this.props.navigation.navigate("SignUpLoginScreen")
            firebase.auth().signOut()
        }}
        style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
    </View>

            </View>

        )
    }
}

const styles=StyleSheet.create({
    button:{
        backgroundColor:"#549BAD",
        width:"40%",
        height:40,
        borderRadius:10,
        borderWidth:1,
        alignItems:"center",
        justifyContent:"center",
        padding:10,
        marginTop:10,
        alignSelf:"center"
    },
    
    
    buttonText:{
        fontSize:20,
        fontWeight:"bold",
        color:"#F0E1DE"
    }

})