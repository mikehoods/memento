import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';

import EditPostScreen from '../screens/EditPostScreen';
import PostDetailsScreen from '../screens/PostDetailsScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Tab = createBottomTabNavigator();

const PostTabNavigator = () => (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="PostDetails" component={PostDetailsScreen} options={{
            tabBarIcon: ({ size, color }) => <FontAwesome5 name="home" color={color} size={size} />,
            title: "Post"
        }}
        />
        <Tab.Screen name="EditPost" component={EditPostScreen} options={{
            tabBarIcon: ({ size, color }) => <FontAwesome5 name="edit" color={color} size={size} />,
            title: "Edit"
        }}/>
        <Tab.Screen name="DeletePost" component={WelcomeScreen} options={{
            tabBarIcon: ({ size, color }) => <FontAwesome5 name="trash" color={color} size={size} />,
            title: "Delete"
        }} />
    </Tab.Navigator>
)

export default PostTabNavigator;