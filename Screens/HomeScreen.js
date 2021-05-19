import * as React from "react";
import {Text,TouchableOpacity,View,StyleSheet} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import db from "../config";
import firebase from "firebase";
import {ListItem} from "react-native-elements";
export default class HomeScreen extends React.Component{
    constructor(){
        super();
        this.state={
            allRequests:[]
        }
        this.requestRef=null
    }

    getObjectList=()=>{
            this.requestRef = db.collection("allRequests")
            .onSnapshot((snapshot)=>{
              var allRequests = snapshot.docs.map(document => document.data());
              this.setState({
                allRequests : allRequests
              });
            })
          
    }


    renderItem = ({item,i}) =>{
        console.log(item.item_name);
        return(
            <ListItem
                key={i}
                title={item.nameOfObject}
                subtitle={item.description}
                titleStyle={{color:"black",fontWeight:"bold"}}
                rightElement={
                    <TouchableOpacity style={styles.button}>
                        <Text style={{color:"#ffff"}}>Exchange</Text>

                    </TouchableOpacity>
                }
                bottomDivider
            />
        )
    }

    keyExtractor=(item,index)=>index.toString()

    componentDidMount(){
        this.getObjectList();
    }
    
    componentWillUnmount(){
        this.requestRef()
    }

    render(){
        return(
            <View>
                <Text style={{color:"orange",alignSelf:"center",fontSize:25,marginBottom:10}}>
                    Home Screen
                </Text>

            <FlatList 

                keyExtractor={this.keyExtractor}
                data={this.state.allRequests}
                renderItem={this.renderItem}
            />


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
    input:{
        backgroundColor:"#F0E1DE",
        width:"80%",
        height:40,
        borderRadius:5,
        borderWidth:1,
        textAlign:"center",
        padding:10,
        marginBottom:20,
        marginTop:10,
        justifyContent:"center",
        alignSelf:"center"

    },
    buttonText:{
        fontSize:20,
        fontWeight:"bold",
        color:"#F0E1DE"
    }

})