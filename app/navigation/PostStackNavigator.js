import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PostList from '../components/PostList';
import PostTabNavigator from './PostTabNavigator';

const Stack = createStackNavigator();

const PostStackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='PostsList' component={PostList} options={{ headerShown: false, title: "Posts" }}/>
        <Stack.Screen name='PostDetails' component={PostTabNavigator} options={{
            title: ""
        }}/>
    </Stack.Navigator>

)

export default PostStackNavigator;