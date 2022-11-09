import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity } from 'react-native';
import logo from '../assets/logo.png'



function Home({ navigation }) {
      const nextpage = (()=>{
     navigation.navigate('welcomepage')
        
       
  })
  return(

<View style={styles.container}>

    <Text  style={styles.heading}>Dine’s Resaurant</Text>

<TouchableOpacity onPress={nextpage}>
           <Image style={styles.logo} source={require('../assets/logo.png')} />
</TouchableOpacity>
    </View>
  )
}

export default Home;

const styles = StyleSheet.create({
 container: {
    flex: 1,
    backgroundColor: '#B250681',
   justifyContent: 'center'
  },

heading:{
  fontWeight:'800',
  fontSize:38,
  marginTop:-100,
   marginLeft: 40
 
},
logo:{
  width:158,
  height:156,
marginLeft: 100,
  borderRadius:30,

}



})