import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
   <Image  style={styles.img} source={require('.assets/img.jpg')} />
       <StatusBar style="auto" /> 
       <Text style={styles.log}>Login</Text>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    
  },
});
