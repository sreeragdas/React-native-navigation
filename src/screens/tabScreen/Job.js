import {View, Text, TouchableOpacity} from 'react-native';
const Job = ({navigation}) => {
  <View>
    <Text>Job Screen</Text>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('NestedScreen', {msg: 'job screen navigation'});
      }}>
      <Text>Click me</Text>
    </TouchableOpacity>
  </View>;
};
export default Job;
