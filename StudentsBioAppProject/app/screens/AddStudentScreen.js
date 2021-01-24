import React, { useState, useEffect } from 'react';
import { Button, View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ToastAndroid, ActivityIndicator } from 'react-native';
import firestore from '@react-native-firebase/firestore';


const AddStudentScreen = (props) => {
    const { navigation } = props
    const studentData = props.route.params ? props.route.params.studentData : null
    //console.log('studentDocumentKey:',studentDocumentKey);
    var firestoreRef = firestore().collection('students')

    const [studentName, setStudentName] = useState('')
    const [studentId, setStudentId] = useState('')
    const [studentGroup, setStudentGroup] = useState('')
    const [studentGithubLink, setStudentGithubLink] = useState('')
    const [studentPhoto, setStudentPhoto] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (studentData) {
            setStudentName(studentData.Student_Name)
            setStudentId(studentData.CMS_ID)
            setStudentGroup(studentData.Group_Name)
            setStudentGithubLink(studentData.Githublink)
            setStudentPhoto(studentData.Photo)
        }
    }, [])

    //add student in database
    const addStudent = () => {
        setIsLoading(true)
        if (studentName && studentId && studentGroup && studentGithubLink && studentPhoto) {
            firestoreRef.add({
                CMS_ID: studentId,
                Githublink: studentGithubLink,
                Group_Name: studentGroup,
                Photo: studentPhoto,
                Student_Name: studentName
            }).then((res) => {
                ToastAndroid.showWithGravity(
                    "User Added Successfully",
                    ToastAndroid.SHORT,
                    ToastAndroid.CENTER
                );
                navigation.navigate('StudentListScreen')
                setIsLoading(false)
            })
                .catch((err) => {
                    console.log('Error Found:', err);
                    ToastAndroid.showWithGravity(
                        "Error while adding user!",
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                    );
                    setIsLoading(false)
                })
        }
        else {
            setIsLoading(false)
            Alert.alert(
                'Fields Empty!',
                'Some fields are empty. Kindly fill all the fields'
            )
        }

    }

    //update student data
    const updateStudent = () => {
        setIsLoading(true)
        if (studentName && studentId && studentGroup && studentGithubLink && studentPhoto) {
            firestoreRef.doc(studentData.key)
                .set({
                    CMS_ID: studentId,
                    Githublink: studentGithubLink,
                    Group_Name: studentGroup,
                    Photo: studentPhoto,
                    Student_Name: studentName
                })
                .then((res) => {
                    ToastAndroid.showWithGravity(
                        "User Updated Successfully",
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                    );
                    navigation.navigate('StudentListScreen')
                    setIsLoading(false)
                })
                .catch((err) => {
                    console.log('Error Found:', err);
                    ToastAndroid.showWithGravity(
                        "Error while updating user!",
                        ToastAndroid.SHORT,
                        ToastAndroid.CENTER
                    );
                    setIsLoading(false)
                })
        }
        else {
            setIsLoading(false)
            Alert.alert(
                'Fields Empty!',
                'Some fields are empty. Kindly fill all the fields'
            )
        }

    }

    return (
        <View style={{ flex: 1, alignItems: 'center', }}>
            <View style={styles.inputsContainer}>
                <TextInput
                    placeholder={'Enter Name'}
                    style={styles.inputTextWrapper}
                    value={studentName}
                    onChangeText={text => setStudentName(text)}
                />
                <TextInput
                    placeholder={'Enter CMS ID'}
                    style={styles.inputTextWrapper}
                    value={studentId}
                    onChangeText={text => setStudentId(text)}
                />
                <TextInput
                    placeholder={'Enter Group '}
                    style={styles.inputTextWrapper}
                    value={studentGroup}
                    onChangeText={text => setStudentGroup(text)}
                />
                <TextInput
                    placeholder={'Enter Github Link'}
                    style={styles.inputTextWrapper}
                    value={studentGithubLink}
                    onChangeText={text => setStudentGithubLink(text)}
                />
                <TextInput
                    placeholder={'Enter Image URL'}
                    style={styles.inputTextWrapper}
                    value={studentPhoto}
                    onChangeText={text => setStudentPhoto(text)}
                />

                {
                    isLoading ?
                        <ActivityIndicator size='large' color='#19AC52' />
                        :
                        <TouchableOpacity
                            style={styles.addBtn}
                            onPress={() => studentData ? updateStudent() : addStudent()}
                        >
                            <Text style={styles.addBtnText}>
                                {
                                    studentData ?
                                        'Update Data'
                                        :
                                        'Add Student'
                                }
                            </Text>
                        </TouchableOpacity>
                }

            </View>


        </View>
    )
}

export default AddStudentScreen;

const styles = StyleSheet.create({
    inputsContainer: {
        width: '90%',
        flex: 1,
    },
    inputTextWrapper: {
        borderColor: '#0000002A',
        borderWidth: 1,
        marginVertical: 8,
    },
    addBtn: {
        backgroundColor: '#19AC52',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
        marginTop: 12,
    },

    addBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '700'
    }
})