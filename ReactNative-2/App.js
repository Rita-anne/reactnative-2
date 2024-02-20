import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image } from 'react-native';
import {TextInput } from 'react-native-paper'
import { Icon} from 'react-native-elements'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
   <Image  style={styles.img} source={require('./assets/img.jpg')} />
       <StatusBar style="auto" /> 
       <Text style={styles.log}>Login</Text>
       </View>
       <View style={styles.logins} >
        <TextInput style={styles.creative} label='creative@ui8.net' mode='flat' placeholder='Useramee'
        left={<TextInput.Icon icon={'account' } style={{backgroundColor:'#ffccb3', borderRadius:100}} />}/>
        <TextInput style={styles.creative} label='.......................' mode='flat' underlineColor='#ffffe6' placeholder='Useramee'
        left={<TextInput.Icon icon={'lock' } style={{backgroundColor:'#b3d9ff', borderRadius:100}} />}/>
       </View>
    <View style={styles.pass}>
      <Text style={{color:'#8080ff', padding:15, fontSize:20}} >Forget password?</Text>
      <Text style={{borderRadius:45, color:'white', backgroundColor:'black', padding:15, paddingRight:30, paddingLeft:30, fontSize:20}}> Login </Text>
      </View>
      <View style={styles.icons}>
        <Icon name='facebook' color='blue' style={{backgroundColor:'white',borderRadius:100, padding:15,}}/>
<Icon name='google' type='font-awesome'style={{backgroundColor:'white', borderRadius:100,padding:15}}/>
<Icon name='apple' type='font-awesome'style={{backgroundColor:'white',borderRadius:100,padding:15}}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    padding:5,
    
  },
  img:{
    width:'100%',
  },
  log:{
textAlign:'center',
fontSize: 30,
padding:15,
 },
 creative:{
margin:10,
backgroundColor:'white',
borderRadius:60,
borderTopRightRadius:60,
borderTopStartRadius:60,
 },
 logins:{
  backgroundColor:'white',
  borderRadius:30,
  margin:10,
 },
 pass:{
 display:'flex',
 flexDirection:'row', 
 justifyContent:'space-around',
 padding:20,
 },
 icons:{

    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    justifyContent:'space-around',
    padding:25,
  },
});
