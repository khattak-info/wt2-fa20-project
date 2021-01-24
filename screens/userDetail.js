import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View , Image, Text} from 'react-native';
import firebase from '../FirebaseConfig';

class UserDetailScreen extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      cmsid: '',
      githublink: '',
      imagelink: '',
      isLoading: true
    };
  }
  componentDidMount() {
    const dbRef = firebase.firestore().collection('users').doc(this.props.route.params.userkey)
    dbRef.get().then((res) => {
      if (res.exists) {
        const user = res.data();
        this.setState({
          key: res.id,
          name: user.name,
          cmsid: user.cmsid,
          githublink: user.githublink,
          imagelink: user.imagelink,
          isLoading: false
        });
      } else {
        console.log("Document does not exist!");
      }
    });
  }

  inputValueUpdate = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
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
        <View style={styles.imageStyle}>
           <Image 
  source={{
    uri: this.state.imagelink
  }} 
  style={{width: 100, height: 100, borderRadius: 100/2}} 
/>
        </View>

<View style={{alignItems: "center"}}>
<Text style={{fontSize: 20}}><strong>{this.state.name}</strong></Text>
</View>
<View style={{alignItems: "center"}}>
<Text style={{fontSize: 15}}>CMS ID: {this.state.cmsid}</Text>
</View>
<View style={{alignItems: "center"}}>
<Text style={{fontSize: 15}}><a href={this.state.githublink}>{this.state.githublink}</a></Text>
</View>
        <View style={styles.button}>
          <Button
            title='Edit'
            onPress={() => {
                    this.props.navigation.navigate('UpdateScreen', {
                      userkey: this.state.key
                    }) }}
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
    padding: 35
  },
  imageStyle: {
    flex: 1,
    marginBottom: 20,
    alignItems: "center"
  },
 
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    marginBottom: 7, 
    marginTop: 20
  }
})

export default UserDetailScreen;