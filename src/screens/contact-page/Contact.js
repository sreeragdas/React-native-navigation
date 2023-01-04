import react from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
const Contact=()=>{
    return(
        <View style={styles.sectionContainer} >
            <Text style={styles.sectionTitle}>Login Page</Text>
          
        </View>
    );
}

const styles = StyleSheet.create({
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
    },
    highlight: {
      fontWeight: '700',
    },
  });

export default Contact;

// const style=StyleSheet.create({
//     mainContainer:{
//         height:'100%',
//         paddingHorizontal:'30',
//         paddingTop:'30',
//         backgroundColor:'#fff',
//         },
//     mainHeader:{
//         fontSize:25,
//         color:'#344055',
//         fontWeight:"500",
//         paddingTop:20,
//         }
// })