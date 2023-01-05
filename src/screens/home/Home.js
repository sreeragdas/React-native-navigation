import {View, Text, Button, StyleSheet} from 'react-native';
import {create} from 'react-test-renderer';
const Home = ({route, navigation}) => {
  const {myName} = route.params;
  //if we are using same name variable to store then we dont want to write route.params.myName
  return (
    <View>
      <Text>Welcome {myName}</Text>
      <Button
        title="GO Back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      {/* if we write onPress={navigation.goBack()} then in a fraction of second it will go to home and again display login page to execute the particular code we use callback funtion , it will execute the code and will work fine */}
      {}
    </View>
  );
};

const styles = StyleSheet.create({
  nameText: {
    color: 'black',
  },
});

export default Home;
