import { useState } from "react";
import {StyleSheet,View,Constants, TextInput, TouchableOpacity,Text,Image,} from 'react-native';
import logo from '../assets/logo.png';



export default function Forgotpassword(){
  return(
    <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/logo.png')} />
    <Text style={{ position:'absolute',width:197,top:25,left:110,height:26,fontfamily:'Corinthia',fontStyle: 'Corinthia',fontWeight:'700',fontsize:32,lineheight:38,color:'#000000'}} >Dine’s Resaurant</Text>

    <Text style={{textAlign:'center',color:'#B25068',fontWeight:'900',fontSize:40,}}>CREATE NEW PASSWORD</Text>
<View>
<Text placeholder='' style={{textAlign: "center",}}> NEW PASSWORD </Text>
 <TextInput placeholder='' style={{borderRadius: 10, backgroundColor: 'white', width: 250, marginLeft: 50, paddingLeft: 15,height:40,}}></TextInput>

<Text placeholder='' style={{textAlign: "center",}} >CONFIRM PASSWORD</Text>
<TextInput placeholder='' style={{borderRadius: 10, backgroundColor: 'white', width: 250, marginLeft: 50, paddingLeft: 15,height:40}}></TextInput>


<TouchableOpacity style={styles.btn}>
<Text style={{color:'#fff', fontsize:16, fontWeight:'500',}}>CREATE</Text>
</TouchableOpacity>

</View>
    
    </View>
  )

}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
  borderRadius: 30,
    backgroundColor: '#D9D9D9',
    padding: 8,
  },
logo:{
  width:59,
  height:59,
  bottom:200,
  borderRadius:100,
  left:14
},

 btn: {
   backgroundColor: '#B25068',
   width: 120,
   height: 40,
   borderRadius: 20,
   marginLeft: 120,
   justifyContent: 'center',
   paddingLeft:30,
   color:'white',
   marginTop:10
 }


})