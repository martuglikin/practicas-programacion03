import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { db } from '../firebase/config';

class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = { usuarios: [] };
  }

  componentDidMount() {
    db.collection('users').onSnapshot(docs => {
      let users = [];
      docs.forEach(doc => {
        users.push({
          id: doc.id,
          data: doc.data()
        });
      });
      this.setState({ usuarios: users });
      console.log('Usuarios:', users); // mostrar estado con los datos
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Usuarios</Text>

        <FlatList
          data={this.state.usuarios}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.row}>{item.data.email}</Text>
          )}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignSelf: 'stretch', padding: 16, paddingTop: 24 },
  title: { fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 12 },
  row: { marginBottom: 8, fontSize: 16 },
});

export default Usuarios;


