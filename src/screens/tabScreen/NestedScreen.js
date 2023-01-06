import {View, Text} from 'react-native';
const NestedScreen = ({route}) => {
  return (
    <View>
      <Text>Hi Nested Screen {route.params.msg}</Text>
    </View>
  );
};
export default NestedScreen;
