import {StyleSheet, View} from 'react-native';
import React from 'react';
import {
  Avatar,
  Button,
  Icon,
  Input,
  Layout,
  List,
  ListItem,
  Text,
} from '@ui-kitten/components';
import Lottie from 'lottie-react-native';
import {TouchableWithoutFeedback} from '@ui-kitten/components/devsupport';
import OnlineStatus, {Circle} from '../components/OnlineStatus';
const AlertIcon = props => <Icon {...props} name="alert-circle-outline" />;
const CircleIcon = props => <Icon {...props} name="stop-circle-outline" />;
const HeartIcon = props => (
  <Icon
    {...props}
    name="heart"
    style={{
      height: 25,
      width: 35,
    }}
    fill="red"
  />
);
const MessageIcon = props => (
  <View
    style={{
      backgroundColor: '#F3F8FC',
      height: 35,
      width: 35,
      borderRadius: 100,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Icon
      {...props}
      name="message-square"
      style={{
        height: 20,
        width: 25,
      }}
      fill="#00C8D7"
    />
  </View>
);
const NavigationIcon = props => (
  <View
    style={{
      backgroundColor: '#E7F6F7',
      height: 35,
      width: 35,
      borderRadius: 100,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Icon
      {...props}
      name="navigation-2"
      style={{
        height: 20,
        width: 25,
      }}
      fill="#00C8D7"
    />
  </View>
);
const StarIcon = ({name}) => (
  <Icon
    name={name}
    style={{
      height: 15,
      width: 20,
    }}
    fill="#F7C309"
  />
);
const PasswordIcon = props => <Icon {...props} name="lock" />;
const EmailIcon = props => <Icon {...props} name="email" />;

const doctorServices = [
  'General check-ups',
  'Vaccinations and immunizations',
  'Cancer screenings',
  'Heart disease prevention',
  'Diabetes management',
  'Pediatric care',
  'Women health services',
  'Mental health counseling',
];
const Home = () => {
  const renderItem = ({item, index}) => (
    <ListItem
      style={{backgroundColor: '#f7ffff'}}
      title={`${item}`}
      accessoryLeft={props => <Circle {...props} color="gray" size={10} />}
      // style={{
      //   margin: 0,
      //   padding: 0,
      // }}
    />
  );
  return (
    <Layout style={styles.container}>
      <Layout
        level="3"
        style={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          borderRadius: 25,
          backgroundColor: 'white',
          marginTop: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Avatar
            style={styles.avatar}
            size="giant"
            shape="square"
            source={require('../assets/user.jpg')}
          />

          <View style={{flex: 1}}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={[styles.text, {fontWeight: 'bold', marginRight: 5}]}
                category="h6">
                John Smith
              </Text>
              <OnlineStatus />
            </View>
            <Text style={[styles.text]} category="p1">
              ENT specialist
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <StarIcon name="star" />
              <StarIcon name="star" />
              <StarIcon name="star" />
              <StarIcon name="star" />
              <StarIcon name="star-outline" />
              <Text style={[styles.text, {marginLeft: 5}]} category="s1">
                4.0
              </Text>
            </View>
            <Text
              style={[styles.text, {color: '#00C8D7', fontWeight: 'bold'}]}
              category="p1">
              $200.00/hr
            </Text>
          </View>
          <HeartIcon />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <View
            style={{
              flex: 0.8,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{fontWeight: 'bold'}} category="p1">
                100
              </Text>
              <Text category="p2">Review</Text>
            </View>
            <View>
              <Text style={{fontWeight: 'bold'}} category="p1">
                100
              </Text>
              <Text category="p2">Review</Text>
            </View>
            <View>
              <Text style={{fontWeight: 'bold'}} category="p1">
                100
              </Text>
              <Text category="p2">Review</Text>
            </View>
          </View>
          <Button style={styles.button}>Book Now</Button>
          <MessageIcon />
        </View>
      </Layout>
      <Layout
        level="3"
        style={{
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 25,
          backgroundColor: '#f7ffff',
          marginTop: 20,
          zIndex: 100,
          marginHorizontal: 10,
        }}>
        <Text
          style={[styles.text, {fontWeight: 'bold', marginRight: 5}]}
          category="p1">
          Services{' '}
        </Text>

        <List
          style={styles.listContainer}
          data={doctorServices}
          renderItem={renderItem}
        />
      </Layout>

      {/* <View style={styles.imgContainer}>
    
      </View> */}
      <Layout level="2" style={styles.layoutContainer}>
        <Lottie
          source={require('../assets/map.json')}
          autoPlay
          loop
          resizeMode="cover"
        />
      </Layout>

      <Layout
        level="3"
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderRadius: 25,
          backgroundColor: 'white',
          marginTop: 20,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 200,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 5,
          }}>
          <View
            style={{
              flex: 0.4,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View>
              <Text style={{fontWeight: 'bold'}} category="p1">
                Distance
              </Text>
              <Text category="p2">2.10km</Text>
            </View>
            <View>
              <Text style={{fontWeight: 'bold'}} category="p1">
                Time
              </Text>
              <Text category="p2">20 min</Text>
            </View>
          </View>
          <NavigationIcon />
        </View>
        <View
          style={{
            marginTop: 10,
          }}>
          <Text category="p1">
            Iris Watson P.O. Box 283 8562 Fusce Rd. Frederick Nebraska 20620
          </Text>
        </View>
      </Layout>
    </Layout>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F8FC',
    paddingHorizontal: 20,
  },
  avatar: {
    margin: 5,
    height: 80,
    width: 80,
    borderRadius: 9,
  },

  imgContainer: {
    flex: 1,
    width: '100%',
    // margin: -30,
  },
  input: {
    borderRadius: 25,
    backgroundColor: '#F2F2F2',
    marginVertical: 5,
  },
  layoutContainer: {
    flex: 1.2,
    zIndex: 1,
    marginTop: -40,
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
  listContainer: {
    maxHeight: 150,
  },
});
