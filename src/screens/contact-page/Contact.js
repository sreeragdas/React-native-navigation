import react from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';

const Contact = ({navigation}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const click = () => {
    if (!password || !name) {
      alert('error');
    } else {
      alert('login successfull');
      navigation.navigate('Home', {myName: `${name}`});
    }
  };
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.sectionTitle}>Login Page</Text>
      <TextInput
        style={styles.input}
        name="email"
        onc
        onChangeText={e => {
          setName(e);
        }}
        placeholder="Email"
      />
      <TextInput
        style={styles.input}
        name="password"
        onChangeText={e => {
          setPassword(e);
        }}
        placeholder="Password"
      />
      <View style={styles.buttonView}>
        <TouchableOpacity style={styles.button} onPress={click}>
          <Text>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
 

    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    justifyContent: 'center',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
  },
  button: {
    borderWidth: 1,
    color: 'red',
    alignItems: 'center',
  },
  buttonView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Contact;
