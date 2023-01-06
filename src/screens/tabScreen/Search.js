import {View, Text, TouchableOpacity} from 'react-native';
const Search = ({navigation}) => {
  <View>
    <Text>Search Screen</Text>
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('NestedScreen', {msg: 'search screen navigation'});
      }}>
      <Text>Click me</Text>
    </TouchableOpacity>
  </View>;
};
export default Search;
