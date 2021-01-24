import React, { Component } from 'react';
import { StyleSheet, ScrollView, ActivityIndicator, View , Text, Button, Image} from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from '../FirebaseConfig';

class UserScreen extends Component {

  constructor() {
    super();
    this.firestoreRef = firebase.firestore().collection('users');
    this.state = {
      isLoading: true,
      userArr: []
    };
  }

  componentDidMount() {
    this.unsubscribe = this.firestoreRef.onSnapshot(this.getCollection);
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  getCollection = (querySnapshot) => {
    const userArr = [];
    querySnapshot.forEach((res) => {
      const { name, cmsid, githublink, imagelink } = res.data();
      userArr.push({
        key: res.id,
        res,
        name,
        cmsid,
        githublink,
        imagelink,
      });
    });
    this.setState({
      userArr,
      isLoading: false,
   });
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={styles.preloader}>
          <ActivityIndicator size="large" color="#9E9E9E"/>
        </View>
      )
    }    
    return (
      <ScrollView style={styles.container}>
          {
            this.state.userArr.map((item, i) => {
              return (
                <ListItem
                  key={i}
                  chevron
                  bottomDivider
                  onPress={() => {
                    this.props.navigation.navigate('UserDetailScreen', {
                      userkey: item.key
                    });
                  }}>
                  <Image 
  source={{
    uri: item.imagelink
  }} 
  style={{width: 40, height: 40, borderRadius: 40/2}} 
/>
<Text style={{fontSize: 16}}><strong>{item.name}</strong></Text></ListItem>
              );
            })
          }
          <View style={styles.button}>
          <Button
            title='Add User'
            onPress={() => this.props.navigation.navigate('AddUserScreen')} 
            color="#19AC52"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingBottom: 22
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default UserScreen;