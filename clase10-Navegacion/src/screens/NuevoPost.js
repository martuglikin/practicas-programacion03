import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { auth, db } from '../firebase/config';

class NuevoPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mensaje: '',
    };
  }

  onSubmit() {
    const { mensaje } = this.state;

    db.collection('posts').add({
        email: auth.currentUser ? auth.currentUser.email : null,
        message: mensaje,
        createdAt: Date.now(),
      })
      .then(() => {
        console.log('Post creado');
        this.setState({ mensaje: '' });
      })
      .catch((e) => console.log(e));
  }

  render() {
    const { mensaje } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nuevo post</Text>

        <TextInput
          style={[styles.field, { height: 100, textAlignVertical: 'top' }]}
          multiline
          placeholder="Escribí tu mensaje..."
          onChangeText={(t) => this.setState({ mensaje: t })}
          value={mensaje}
        />

        <Pressable style={styles.button} onPress={() => this.onSubmit()}>
          <Text style={styles.buttonText}>Publicar</Text>
        </Pressable>

        <View style={{ marginTop: 16 }}>
          <Text style={{ fontWeight: '700', marginBottom: 6 }}>Vista previa</Text>
          <Text>{mensaje}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignSelf: 'stretch', padding: 16, paddingTop: 24 },
  title: { fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 12 },
  field: {
    height: 20,
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderStyle: 'solid',
    borderRadius: 6,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#28a745',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#28a745',
    alignSelf: 'center',
    minWidth: 160,
  },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '700' },
});

export default NuevoPost;
