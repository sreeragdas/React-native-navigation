import {View, Text, TouchableOpacity} from 'react-native';

const Profile = ({navigation}) => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home', {
            msg: 'profile screen navigation',
          });
        }}>
        <Text>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Profile;
