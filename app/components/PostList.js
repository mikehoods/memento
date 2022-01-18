import React from 'react';
import { FlatList } from 'react-native';

import ListItemSeparator from './ListItemSeparator';
import posts from '../config/posts';
import PostItem from './PostItem';
import routes from '../navigation/routes';
import Screen from './Screen';

function PostList({ navigation }) {
    const renderItem = ({ item }) => (
        <PostItem 
            title={item.title}
            body={item.body}
            image={item.image}
            time={item.time}
            onPress={() => navigation.navigate(routes.POST_DETAILS, {screen: 'PostDetails', params: item})}
        />
    )
  return (
    <Screen>
        <FlatList 
            data={posts}
            renderItem={renderItem}
            ItemSeparatorComponent={ListItemSeparator}
            keyExtractor={item => item.id}
        />
    </Screen>
  );
}

export default PostList;