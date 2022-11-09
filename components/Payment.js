import * as React from 'react';
import { Text, View, StyleSheet,TouchableOpacity ,TextInput,Image } from 'react-native';

import { Card } from 'react-native-paper';

export default function Payment ({navigation}) {

   const nextpage = (()=>{
     navigation.navigate('home')
  })
   
   

  return (
    <View style={styles.container}>
    
<Text style={styles.header}>Dine’s Resaurant</Text>
<Image style={styles.logo2} source={require('../assets/logo.png')} />

<Text style={styles.subHeader}>PAYMENT</Text>

<View style={styles.borders} > 

<Text style={styles.subHeader2}>Order details:</Text>
</View>

<Text style={styles.totals}> TOTAL:</Text>
<TouchableOpacity style={styles.button1}>
<TextInput/>
</TouchableOpacity>


<TouchableOpacity style={styles.button2}
 onPress={nextpage}>

<Text style={styles.order}  > COMPLETE ORDER</Text>
</TouchableOpacity>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius:30,
    backgroundColor: '#D9D9D9',
  },
 header:{
  width: 171,
  height: 34,
  marginLeft: 70,
  marginTop:30,
  fontFamily:'Comic Neue',
  fontWeight: '700',
  fontSize: 22,
  textAlign:'center',
  color:'#B25068',
  }, 
logo2:{
    width:35,
    height:35,
    marginTop:-45,
    marginLeft:243,
    borderRadius:100
  },

subHeader:{
  fontSize:20,
  fontWeight:'700',
  textAlign:'center',
  marginTop:80,
  color:'#B25068'
  }, 
borders:{
  height:250,
  width:250,
  backgroundColor:'#B25068',
  marginTop:10,
  marginLeft:30,
},
subHeader2:{
  fontSize:15,
  fontWeight:'700',
  textAlign:'center',
  marginTop:10,

  },
totals:{
  fontSize:20,
  fontWeight:'700',
  textAlign:'center',
  marginTop:50,
  color:'#B25068',
  marginRight:150,

  },
   button1:{
    width:135,
    height:40,
    marginTop:-40,
    backgroundColor:'#B25068',
    borderRadius:10,
    marginLeft:140,
  
  },
  button2:{
    width:185,
    height:40,
    marginTop:40,
    backgroundColor:'#B25068',
    borderRadius:10,
    marginLeft:70,
  },
   order:{
    marginLeft:30,
    marginTop:10,
    fontsize:14,
    fontWeight:'700',
  },

});