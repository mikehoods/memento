import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PostList from '../components/PostList';
import PostTabNavigator from './PostTabNavigator';

const Stack = createStackNavigator();

const PostStackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='Posts List' component={PostList} options={{ headerShown: false }}/>
        <Stack.Screen name='PostDetails' component={PostTabNavigator} />
    </Stack.Navigator>

)

export default PostStackNavigator;