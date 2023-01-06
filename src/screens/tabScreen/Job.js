import {View, Text, TouchableOpacity} from 'react-native';
const Job = ({navigation}) => {
  return (
    <View>
      <Text>Job Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home', {msg: 'job screen navigation'});
        }}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Job;
