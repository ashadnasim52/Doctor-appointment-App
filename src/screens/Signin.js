import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Icon, Input, Layout, Text} from '@ui-kitten/components';
import Lottie from 'lottie-react-native';
import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';
import {useNavigation} from '@react-navigation/native';
const AlertIcon = props => <Icon {...props} name="alert-circle-outline" />;
const PasswordIcon = props => <Icon {...props} name="lock" />;
const EmailIcon = props => <Icon {...props} name="email" />;
const SignIn = () => {
  const [value, setValue] = useState('');
  const [email, setEmail] = useState('');
  const [secureTextEntry, setSecureTextEntry] = React.useState(true);
  const nav = useNavigation();
  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const renderIcon = props => (
    <TouchableWithoutFeedback onPress={toggleSecureEntry}>
      <Icon {...props} name={secureTextEntry ? 'eye-off' : 'eye'} />
    </TouchableWithoutFeedback>
  );
  const renderCaption = () => {
    return (
      <View style={styles.captionContainer}>
        {AlertIcon(styles.captionIcon)}
        <Text style={styles.captionText}>
          Should contain at least 8 symbols
        </Text>
      </View>
    );
  };
  return (
    <Layout style={styles.container}>
      <View style={styles.imgContainer}>
        <Lottie
          source={require('../assets/signin.json')}
          autoPlay
          loop
          style={{
            margin: 10,
          }}
        />
      </View>
      <Layout level="2" style={styles.layoutContainer}>
        <Text style={styles.header} category="h4">
          Welcome back!
        </Text>
        <Text style={styles.text} category="s1">
          SignIn to Continue
        </Text>

        <Layout
          level="3"
          style={{
            paddingHorizontal: 10,
            paddingVertical: 20,
            borderRadius: 25,
            backgroundColor: 'white',
            marginTop: 20,
          }}>
          <Input
            value={email}
            placeholder="Email"
            accessoryLeft={EmailIcon}
            onChangeText={nextValue => setEmail(nextValue)}
            style={styles.input}
          />
          <Input
            value={value}
            placeholder="Password"
            caption={renderCaption}
            accessoryRight={renderIcon}
            accessoryLeft={PasswordIcon}
            secureTextEntry={secureTextEntry}
            onChangeText={nextValue => setValue(nextValue)}
            style={styles.input}
          />
          <Button
            style={styles.button}
            onPress={() => {
              nav.navigate('Profile');
            }}>
            SignIn
          </Button>

          <Text
            style={[
              styles.text,
              {
                textAlign: 'center',
              },
            ]}
            category="s1">
            Already have an account?{' '}
            <Text style={{color: '#00C8D7', fontWeight: 'bold'}}>SignUp</Text>
          </Text>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    borderRadius: 25,
    backgroundColor: '#F2F2F2',
    marginVertical: 5,
  },
  layoutContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  text: {
    textAlign: 'left',
  },
  header: {
    textAlign: 'left',
    color: '#00C8D7',
    fontWeight: 'bold',
  },
  button: {
    marginVertical: 16,
    borderRadius: 25,
    backgroundColor: '#00C8D7',
    borderWidth: 0,
  },
  captionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  captionIcon: {
    width: 10,
    height: 10,
    marginRight: 5,
  },
  captionText: {
    fontSize: 12,
    fontWeight: '400',
    fontFamily: 'opensans-regular',
    color: '#000000',
  },
});
