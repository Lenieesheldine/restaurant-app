import { useState } from "react";
import {StyleSheet,View,Constants, TextInput, TouchableOpacity,Text,Image,} from 'react-native';




export default function Reservation({navigation}){
     const nextpage = (()=>{
     navigation.navigate('payment')
  })
  return(
    <View style={styles.container}>

            <Image style={styles.logo} source={require('../assets/logo.png')} />

<Text style={{textAlign:'center',color:'#B25068',fontSize:30}}>Make your resevation</Text>

  <Text style={{ position:'absolute',width:197,top:25,left:110,height:26,fontfamily:'Corinthia',fontStyle: 'Corinthia',fontWeight:'700',fontsize:32,lineheight:38,color:'#000000'}} >Dine’s Resaurant</Text>

<View style={styles.reservationbox}>
          <Image style={styles.pic1} source={require('../assets/reserved.png')} />

</View>

<View style={styles.pienkbox}>

<Text style={{textAlign:'center',marginTop:30}}>What’s Your Mobile Number?</Text>
<TextInput placeholder='' style={{borderRadius: 5, backgroundColor: '#D9D9D9', width: 250,height:50,marginTop:50,marginLeft:20 }}></TextInput>

<TouchableOpacity style={styles.btn} onPress={nextpage}>
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
  bottom:60,
  borderRadius:100,
  left:14
},
reservationbox:{
  width:320,
  height:170,
  backgroundColor:'white',
 margin:5,
 borderRadius:30

},
pic1:{
  width:320,
  height:170,
   borderRadius:30
  
},
pienkbox:{
  width:300,
  height:310,
  backgroundColor:'#B25068',
  margin:15
},
 btn: {
   backgroundColor: '#D9D9D9',
   width: 120,
   height: 40,
   borderRadius: 20,
   marginLeft: 90,
   justifyContent: 'center',
  textAlign:'center',
   color:'white',
   marginTop:20
 }

})