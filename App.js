import {
  colors,
  useState,
} from 'react';

import { StatusBar } from 'expo-status-bar';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';

import Header from './components/Header';

const renderItem = (item) => {
  <PostLost post={post.item} />;
};
export default function App() {
  const [posts, setPosts] = useState([
    {
      sender: "Ramon",
      handle: "hola_soy_milk",
      body: "You're awesome!",
      createdAt: new Date(),
    },
    {
      sender: "Pearl",
      handle: "punk_rock_swords",
      body: "Affluent!",
      createdAt: new Date(),
    },
    {
      sender: "Garnet",
      handle: "stronger_than_u",
      body: "An experience!",
      createdAt: new Date(),
    },
  ]);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header label="Kind words" />
        <StatusBar style="auto" />
        <FlatList
          data={posts}
          styles={styles.list}
          renderItem={renderItem}
          keyExtractor={(item) => item.body}
        />{" "}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },

  list: {
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
});
