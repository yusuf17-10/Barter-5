import React from "react";
import {Text,TouchableOpacity,View,TextInput,StyleSheet} from "react-native";
import firebase from "firebase";
import db from "../config";


export default class Settingscreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:firebase.auth().currentUser.email,
            firstName: '',
            lastname: '',
            address: '',
            phone: '',
            docId:''
        }
    }
    

    updateData=()=>{
        db.collection("users").doc(this.state.docId).update({
            firstName:this.state.firstName,
            lastName:this.state.lastname,
            address:this.state.address,
            phone:this.state.phone
        })
    }

    getUserData=()=>{
        db.collection("users").where("emailId","==",this.state.emailId).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                var data = doc.data()
                this.setState({
                    firstName:data.firstName,
                    lastName:data.lastName,
                    address:data.address,
                    phone:data.phone,
                    docId:doc.id
                })
            })
        })
    }
    componentDidMount(){
        this.getUserData()
    }
    render(){
        return(
            <View>
                <Text>
                    SettingScreen
                </Text>
                <TextInput
                    style={styles.input}
                    placeholder={'firstName'}
                    maxLength={8}
                    onChangeText={(text) => {
                      this.setState({ firstName: text });
                    }}
                    value={this.state.firstName}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder={'LastName'}
                    maxLength={8}
                    onChangeText={(text) => {
                      this.setState({ lastName: text });
                    }}
                    value={this.state.lastName}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder={'address'}
                    multiline={true}
                    onChangeText={(text) => {
                      this.setState({ address: text });
                    }}
                    value={this.state.address}
    
                  />
                  <TextInput
                    style={styles.input}
                    placeholder={'PhoneNumber'}
                    keyboardType={'numeric'}
                    maxLength={10}
                    onChangeText={(text) => {
                      this.setState({ phone: text });
                    }}
                    value={this.state.phone}
    
                  />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      this.updateData()
                    }}>
                    <Text>update</Text>
                  </TouchableOpacity>

            </View>
        )

    }

}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ecf0f1',
      justifyContent: 'center',
      alignItems: 'center'
    },
    
    input: {
      backgroundColor: 'white',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: 2,
      marginTop: 30,
      borderWidth:2,
      width:200,
      height:50,
      paddingLeft:10
    },
    button: {
      backgroundColor: '#74DBEF',
      alignItems: 'center',
      alignSelf: 'center',
      justifyContent: 'center',
      borderRadius: 12,
      marginTop: 30,
      borderWidth:2,
      width:150,
      height:50,
    },

    

  imageIcon: {
    width: 400,
    height: 200,
    justifyContent: 'center',
    alignItems:"center",
    alignSelf:"center",
    borderRadius: 10,
    marginTop:20
  },
  });