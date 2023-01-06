import {View, Text, TouchableOpacity} from 'react-native';
const Search = ({navigation}) => {
  return (
    <View>
      <Text>Search Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home', {msg: 'search screen navigation'});
        }}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Search;
