
import { Text, View, StyleSheet } from 'react-native';

import Home from './components/Home';
import Login from './components/login'
import Signup from './components/signup';
import Forgotpassword from './components/forgotpassword';
import Menu from './components/Menu';
import Reservation from './components/Reservation';
import Payment from './components/Payment';
import Specials from './components/Specials';
import Welcomepage from './components/Welcomepage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();


const Stack = createNativeStackNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator useLegacyImplementation>
     <Drawer.Screen name="" component={Menu} /> 
<Drawer.Screen name="specials" component={Specials} />
  <Drawer.Screen name="reservation" component={Reservation} />
 <Drawer.Screen name="payment" component={Payment} />
    
      
    
       



    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
  <NavigationContainer>
          <Stack.Navigator>
           
             

                 

     <Stack.Screen name="home" component={Home} />
           <Stack.Screen name="welcomepage" component={Welcomepage} />
             <Stack.Screen name="signup" component={Signup} />
               <Stack.Screen name="login" component={Login} />
<Stack.Screen name="menu" component={DrawerRoutes} />
<Stack.Screen name="specials" component={Specials} />
                    <Stack.Screen name="reservation" component={Reservation} />
                 <Stack.Screen name="payment" component={Payment} />

                     </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#B25068',
    padding: 8,
     borderRadius: 30,
  },
 
});

