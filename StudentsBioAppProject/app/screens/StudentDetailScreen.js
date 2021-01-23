import React, { Component } from 'react';
import { Button, View, Text, Image, StyleSheet, Linking } from 'react-native';



const StudentDetailScreen = (props) => {
  const studentData = props.route.params.studentData
  console.log('studentData:', studentData);
  return (
    <View style={{ flex: 1 }}>
      {
        studentData ?

          <View style={{ flex: 1, paddingHorizontal: 8, paddingVertical: 12, }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <View>
                <View style={{ marginVertical: 8, }}>
                  <Text style={styles.heading}>
                    Name:
                  </Text>
                  <Text style={styles.nameText}>
                    {studentData.Student_Name}
                  </Text>
                </View>
                <View style={{ marginVertical: 8, }}>
                  <Text style={styles.heading}>
                    CMS ID:
                  </Text>
                  <Text style={styles.nameText}>
                    {studentData.CMS_ID}
                  </Text>
                </View>
                <View style={{ marginVertical: 8, }}>
                  <Text style={styles.heading}>
                    Group Name:
                  </Text>
                  <Text style={styles.nameText}>
                    {studentData.Group_Name}
                  </Text>
                </View>
                <View style={{ marginVertical: 8, }}>
                  <Text style={styles.heading}>
                    Github Link:
                  </Text>
                  <Text style={{...styles.nameText,color:'blue',textDecorationLine:'underline'}}
                  onPress={() => Linking.openURL(studentData.Githublink)}>
                    {studentData.Githublink}
                  </Text>
                </View>
              </View>
              <View>
                <Image
                  style={styles.studentImage}
                  source={{ uri: studentData.Photo }}
                />
              </View>
            </View>
          </View>

          : null
      }
    </View>
  )
}

export default StudentDetailScreen;

const styles = StyleSheet.create({
  studentImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  heading: {
    fontSize: 18,
  },
  nameText: {
    fontSize: 18,
    fontWeight: '700'
  }
})