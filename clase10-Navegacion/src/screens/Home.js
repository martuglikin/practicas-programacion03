import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { db } from '../firebase/config';
import Post from '../components/Post';
import DynamicForm from '../components/DynamicForm';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    db.collection('posts')
      .orderBy('createdAt', 'desc')
      .onSnapshot(docs => {
        let posts = [];
        docs.forEach(doc => {
          posts.push({
            id: doc.id,
            data: doc.data(),
          });
        });
        this.setState({ posts });
        console.log('Posts:', posts);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Posteos</Text>

        <FlatList
          data={this.state.posts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Post data={item.data} />}
          contentContainerStyle={{ paddingBottom: 16 }}
        />

        <Text style={[styles.label, { marginTop: 16 }]}>Formulario de Home:</Text>
        <DynamicForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignSelf: 'stretch', paddingHorizontal: 16, paddingTop: 16 },
  label: { fontSize: 18, fontWeight: '600', marginBottom: 8, textAlign: 'left' },
});

export default Home;
