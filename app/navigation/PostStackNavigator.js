import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import AppNavigator from './AppNavigator';
import PostTabNavigator from './PostTabNavigator';

const Stack = createStackNavigator();

const PostStackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='PostsList' component={AppNavigator} options={{ headerShown: false, title: "Posts" }}/>
        <Stack.Screen name='PostDetails' component={PostTabNavigator} options={{
            title: ""
        }}/>
    </Stack.Navigator>

)

export default PostStackNavigator;