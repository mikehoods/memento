import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { FontAwesome5 } from '@expo/vector-icons';

import AccountScreen from '../screens/AccountScreen';
import AddPostScreen from '../screens/AddPostScreen';
import PostList from '../components/PostList';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name='PostsList' component={PostList} options={{
            tabBarIcon: ({ size, color }) => <FontAwesome5 name="home" color={color} size={size} />,
            title: "Posts"
        }}/>
        <Tab.Screen name='AddPost' component={AddPostScreen} options={{
            tabBarIcon: ({ size, color }) => <FontAwesome5 name="plus-circle" color={color} size={size} />,
            title: "Add Post"
        }}/>
        <Tab.Screen name='Account' component={AccountScreen} options={{
            tabBarIcon: ({ size, color }) => <FontAwesome5 name="user" color={color} size={size} />
        }}/>
    </Tab.Navigator>
)

export default AppNavigator;