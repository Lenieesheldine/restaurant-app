import * as React from 'react';
import { Text, View, StyleSheet,Image,TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';

export default function Specials({ navigation }) {
        const nextpage = (()=>{
     navigation.navigate('reservation')
        
       
  })
  return (
    <View style={styles.container}>

    
    
    <View style={styles.bigbox}>
     <Text style={{ fontWeight: 'bold',textAlign: 'center',fontSize: 18,}}>Dine’s Resaurant</Text>
    
    <Text style={styles.text}>Good food te good Company of lifes Simplest yet greatest pleasures</Text>
    <View style={styles.box} >

    <Text style={{ fontWeight: 'bold',textAlign: 'center',fontSize: 18,}}>Dine’s Resaurant  Specials</Text>
    </View>
    
    </View>

<View style={styles.specialsmenu}> 

<View style={styles.box1}>
<TouchableOpacity onPress={nextpage}>
         <Image
            style={styles.braai}
            source={require('../braai.png')}
          />
    </TouchableOpacity>
</View>
<View  style={styles.box2}>
<Image
            style={styles.braai}
            source={require('../fish.png')}
          />
</View>
<View style={styles.box3}>
<Image
            style={styles.braai}
            source={require('../checken.png')}
          />
</View>

</View >
 <View style={styles.specialsmenu}>
 <View style={styles.box1}>
  <Image
            style={styles.braai}
            source={require('../special3.png')}
          />
 </View>
 <View style={styles.box2}>
 <Image
            style={styles.braai}
            source={require('../special1.png')}
          />
 </View>
 <View  style={styles.box3}>
  <Image
            style={styles.braai}
            source={require('../special.png')}
          />
 </View>
 </View>

 


    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   borderRadius:30,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  bigbox:{
    width:"100%",
    height:250,
   backgroundColor:'#D9D9D9',
   marginBottom:60
    
  },

  box:{
width:'83%',
height:60,
backgroundColor:'#B25068',
alignSelf:'center',
marginTop:'40%',
  },
specialsmenu:{
   flexDirection: 'row',
    margin: 13,
},
 box1: {
    width: 90,
    height: 90,
    backgroundColor: 'green',
    borderRadius:10
  },
box2: {
    width: 90,
    height: 90,
    backgroundColor: 'blue',
     marginLeft: 10,
      borderRadius:10
  },
  box3: {
    width: 90,
    height: 90,
    backgroundColor: 'green',
     marginLeft: 10,
      borderRadius:10
  },

braai:{
  width: 90,
    height: 90,
    borderRadius:10
},
text:{
 fontSize:16,
 textAlign:'center',
 marginTop:50
}

})