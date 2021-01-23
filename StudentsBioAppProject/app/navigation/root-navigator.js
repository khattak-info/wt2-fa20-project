
import React from 'react';
import { View } from "react-native";

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from '@react-navigation/stack'; // importing from stack
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import AddStudentScreen from '../screens/AddStudentScreen'  
import StudentDetailScreen from '../screens/StudentDetailScreen'
import StudentListScreen from '../screens/StudentListScreen'

const AppStack = createStackNavigator();  //creating object
const AppStackScreens = () => {
    return (                            
        <View style={{ flex: 1 }}>
            <AppStack.Navigator initialRouteName='StudentListScreen' >
                <AppStack.Screen
                    name="StudentListScreen"    //it will display student names 
                    component={StudentListScreen}
                    options={{title:'Students List'}}
                />
                <AppStack.Screen        // to display details
                    name="StudentDetailScreen"
                    component={StudentDetailScreen}
                    options={{title:'Student Details'}}
                />
                <AppStack.Screen        
                    name="AddStudentScreen"
                    component={AddStudentScreen}
                    options={({ route }) => ({ title: route.params.headerTitle })}
                />
            </AppStack.Navigator>
        </View>
    )
}

export const RootNavigator = (props) => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <AppStackScreens />
            </NavigationContainer>
        </SafeAreaProvider>
    )
}

export default RootNavigator
