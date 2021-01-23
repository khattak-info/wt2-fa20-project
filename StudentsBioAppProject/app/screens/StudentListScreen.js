import React, { useState, useEffect, } from 'react';
import { Button, View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import firestore from '@react-native-firebase/firestore';

const StudentListScreen = (props) => {
    const { navigation } = props
    var firestoreRef = firestore().collection('students')
    const [isLoading, setIsLoading] = useState(true)
    const [studentsArr, setStudentsArr] = useState([])


    const getCollection = (querySnapshot) => {
        //console.log('Total users: ', querySnapshot.size);
        let studArr = [];
        querySnapshot.forEach(documentSnapshot => {
            //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
            //studArr.push(documentSnapshot.data())
            const { CMS_ID, Githublink, Group_Name, Photo, Student_Name } = documentSnapshot.data()
            studArr.push({
                key: documentSnapshot.id,
                CMS_ID,
                Githublink,
                Group_Name,
                Photo,
                Student_Name
            })

        });
        setStudentsArr(studArr)
        setIsLoading(false)

    }

    const onError = (error) => {
        console.log(error);
    }


    const deleteStudent = (key) => {

        Alert.alert(
            "Are you sure you want to delete user?",
            "Press Confirm to delete or Cancel to cancel operation",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Confirm", onPress: () => firestoreRef.doc(key)
                        .delete().then((res) => {
                            console.log('Student removed from database')
                        })
                }
            ],
            { cancelable: false }
        );
    }

    useEffect(() => {

        const subscriber = firestoreRef
            .onSnapshot(getCollection, onError);

        // Stop listening for updates when no longer required
        return () => subscriber();
    }, []);

    //console.log('studentsArr:', studentsArr);
    const _renderStudentListItem = ({ index, item }) => {
        console.log('item:', item);
        return (
            <TouchableOpacity
                style={styles.listItemContainer}
                onPress={() => navigation.navigate('StudentDetailScreen', { studentData: item })}
            >
                <View>
                    <Image
                        style={styles.studentImage}
                        source={{ uri: item.Photo }}
                    />
                </View>
                <View style={styles.descContainer}>
                    <Text style={styles.name}>
                        {item.Student_Name}
                    </Text>
                    <Text style={styles.studentId}>
                        {item.CMS_ID}
                    </Text>
                </View>
                <View style={styles.editIconsContainer}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('AddStudentScreen', { studentData: item,headerTitle: 'Update Student Data' })}
                    >
                        <Image
                            style={styles.editIcon}
                            source={require('../assets/icons8-registration-48.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => deleteStudent(item.key)}
                    >
                        <Image
                            style={styles.editIcon}
                            source={require('../assets/icons8-delete-bin-48.png')}
                        />
                    </TouchableOpacity>

                </View>
            </TouchableOpacity>

        )
    }
    return (
        <View style={{ flex: 1, }}>
            {
                studentsArr ?
                    <FlatList
                        data={studentsArr}
                        renderItem={_renderStudentListItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                    : null
            }
            <TouchableOpacity
                onPress={() => navigation.navigate('AddStudentScreen', { headerTitle: 'Add Student' })}
                style={styles.addStudentBtn}
            >
                <Image
                    style={styles.addIcon}
                    source={require('../assets/icons8-add-user-male-48.png')}
                />
            </TouchableOpacity>
            
        </View>
    )
}

export default StudentListScreen;

const styles = StyleSheet.create({
    studentImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    listItemContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 8,
        paddingVertical: 12,
    },
    descContainer: {
        paddingHorizontal: 12,
        flex: 1,
    },
    name: {
        fontSize: 18,
    },
    studentId: {
        fontSize: 14,
        color: '#0000008A'
    },
    editIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    editIcon: {
        width: 25,
        height: 25,
        marginHorizontal: 8,
    },
    addStudentBtn: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,

        elevation: 4,
    },
    addIcon: {
        width: 40,
        height: 40,
    },

})