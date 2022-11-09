import * as React from 'react';
import { Text, View, StyleSheet, Image,TouchableOpacity } from 'react-native';

export default function Menu({ navigation }) {
          const nextpage = (()=>{
     navigation.navigate('specials')
        
       
  })
  return (
    <View style={styles.container}>
       <Text
        style={{
          position: 'absolute',
          width: 197,
          top: 25,
          left: 110,
          height: 26,
          fontfamily: 'Corinthia',
          fontStyle: 'Corinthia',
          fontWeight: '700',
          fontsize: 32,
          lineheight: 38,
          color: '#000000',
        }}>
        Dine’s Resaurant
      </Text>
       <Text style={styles.header}>Dine’s Resaurant Menu</Text>
     
         <Image style={styles.logo2} source={require('../assets/logo.png')} />
       
           <Text style={{ fontSize: 20, fontWeight: '800', textAlign: 'center' }}>
        Food menu
      </Text>
<View style={styles.box}>
<View style={styles.box1}>
 < TouchableOpacity onPress={nextpage}>
 <Image
            style={styles.burger}
            source={require('../assets/burger.png')}
          />
            </TouchableOpacity>
</View>
<View style={styles.box2}>
 <Image
            style={styles.burger}
            source={require('../assets/food3.png')}
          />
</View>
     <View style={styles.box3}>
       <Image
            style={styles.burger}
            source={require('../assets/food2.png')}
          />
     </View>
</View>

 <Text style={{ fontSize: 20, fontWeight: '800', textAlign: 'center' }}>
        Drinks menu
      </Text>
 <View style={styles.box}>
  <View style={styles.box1}>
   <Image
            style={styles.burger}
            source={require('../assets/drinks.png')}
          />
  </View>
  
        <View style={styles.box2}>
        <Image
            style={styles.burger}
            source={require('../assets/fanta.png')}
          />
        </View>

                <View style={styles.box3}>
                <Image
            style={styles.burger}
            source={require('../assets/sprite.png')}
          />
                </View>
 </View>

   <Text style={{ fontSize: 20, fontWeight: '800', textAlign: 'center' }}>
        Desserts menu
      </Text>
          <View style={styles.box}>
        <View style={styles.box1}>
        <Image
            style={styles.burger}
            source={require('../assets/dessert.png')}
          />
        </View>
           <View style={styles.box2}>
      <Image
            style={styles.burger}
            source={require('../assets/dessert2.png')}
          />      
           </View>
       <View style={styles.box3}>
                 <Image style={styles.burger} source={require('../assets/cake.png')} />
       </View>

        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
    padding: 8,
    borderRadius: 30,
  },

  header: {
    width: 170,
    marginLeft: 70,
    fontFamily: 'Comic Neue',
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
    color: '#B25068',
  },
  logo2: {
    width: 35,
    height: 35,
    marginTop: -45,
    marginLeft: 243,
    borderRadius: 100,
  },
  box: {
    flexDirection: 'row',
    margin: 13,
  },
  box1: {
    width: 90,
    height: 90,
    backgroundColor: 'green',
  },

  box2: {
    width: 90,
    height: 90,
    backgroundColor: 'red',
    marginLeft: 10,
  },
  box3: {
    width: 90,
    height: 90,
    backgroundColor: 'blue',
    marginLeft: 10,
  },

  burger: {
    width: 90,
    height: 90,
  },
});
