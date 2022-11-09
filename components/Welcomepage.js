import { useState } from "react";
import {StyleSheet,View,Constants, TextInput, TouchableOpacity,Text,Image,} from 'react-native';
import logo from '../assets/logo.png';
import burger from '../assets/welcomepage.logo.png';



export default function Welcomepage({ navigation }){
     const nextpage = (()=>{
     navigation.navigate('signup')
        
       
  })
     const nextpage1 = (()=>{
     navigation.navigate('login')
        
       
  })
  return(
    <View style={styles.container}>
<View style={styles.box}>

 <Image style={styles.logo} source={require('../assets/logo.png')} />


<Text  style={styles.heading}>Dine’s Resaurant</Text>

<Text style={styles.slogan}>For the love of delicious food</Text>
<Text style={styles.paragraph}>Dine’s Resaurant brings you Something hot & Something tasty</Text>

 <Image style={styles.burger} source={require('../assets/welcomepage.logo.png')} />
<Text style={styles.paragraph1}>Fun. Fast . Tasty . Delicious !!!</Text>
</View>


<TouchableOpacity style={styles.btn} onPress={nextpage}>
<Text style={{color:'#fff', fontsize:16, fontWeight:'500'}}>Sign up</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.btn} onPress={nextpage1}>
<Text style={{color:'#fff', fontsize:16, fontWeight:'500'}}>   Login</Text>
</TouchableOpacity>

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
  borderRadius:100,
  left:35,
  marginTop: 15
},
burger:{
  width:129,
  height:159,
  borderRadius:60,
marginLeft: 90,
  marginTop: 15,
},
slogan:{
color: '#B25068',
fontStyle: 'Inika',
  fontWeight:'800',
  fontSize:20,
marginLeft: 46,
marginTop: 50
},
paragraph:{
fontStyle: 'Inika',
  fontWeight:'500',
  fontSize:20,
marginLeft: 46,
marginTop: 30,
color: 'grey',
lineheight:58
},
paragraph1:{
fontStyle: 'Inika',
  fontWeight:'500',
  fontSize:20,
marginLeft: 46,
marginTop: 30
},


 box:{
   width: 350,
   height: 520,
   backgroundColor: 'white',
     borderRadius:60,
     marginTop: -30,
   
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
   margin: 5
 },
 heading:{
position:'absolute',top:25,left:110,fontfamily:'Corinthia',fontStyle: 'Corinthia',fontWeight:'700',fontsize:72,lineheight:38,color:'#000000'
 
},


})