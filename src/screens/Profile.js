import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {Button, Icon, Input, Layout, Text} from '@ui-kitten/components';
import Lottie from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';

const EditIcon = props => <Icon {...props} name="edit" />;

const Profile = () => {
  const nav = useNavigation();

  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  return (
    <Layout level="1" style={styles.container}>
      <View
        style={{
          flex: 1,
          marginHorizontal: 20,
          marginVertical: 20,
          backgroundColor: 'white',
          borderRadius: 25,
        }}>
        <View style={styles.imgContainer}>
          <Lottie
            source={require('../assets/profile.json')}
            autoPlay
            loop
            style={{}}
          />
        </View>
        <Layout level="1" style={styles.layoutContainer}>
          <View>
            <Text style={styles.header} category="h4">
              John Smith
            </Text>
            <Text style={styles.text} category="s1">
              Account Credit:{' '}
              <Text
                style={{
                  color: '#00C8D7',
                  fontWeight: 'bold',
                }}>
                $300
              </Text>
            </Text>
          </View>
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
              value={name}
              placeholder="Name"
              accessoryRight={EditIcon}
              onChangeText={nextValue => setName(nextValue)}
              style={styles.input}
            />
            <Input
              value={email}
              placeholder="Email"
              accessoryRight={EditIcon}
              onChangeText={nextValue => setEmail(nextValue)}
              style={styles.input}
            />
            <Input
              value={phoneNumber}
              placeholder="Phone Number"
              accessoryRight={EditIcon}
              onChangeText={nextValue => setPhoneNumber(nextValue)}
              style={styles.input}
            />
            <Input
              value={address}
              placeholder="Address"
              accessoryRight={EditIcon}
              multiline={true}
              onChangeText={nextValue => setAddress(nextValue)}
              style={[styles.input]}
              textStyle={{minHeight: 74}}
            />
            <Button
              style={styles.button}
              onPress={() => {
                nav.navigate('Home');
              }}>
              Save Now
            </Button>
          </Layout>
        </Layout>
      </View>
    </Layout>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8FC',
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
    flex: 3,
    borderRadius: 25,
  },
  text: {
    textAlign: 'center',
  },
  header: {
    textAlign: 'center',
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
