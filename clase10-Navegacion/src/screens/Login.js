import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { auth } from '../firebase/config';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '', error: '' };
  }

  onSubmit() {
    const { email, password } = this.state;

    if (email.includes('@') === false) {
      this.setState({ error: 'Email mal formateado' });
      return;
    }
    if (!password || password.length < 6) {
      this.setState({ error: 'La password debe tener una longitud mínima de 6 caracteres' });
      return;
    }

    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ error: '' });
        this.props.navigation.navigate('HomeMenu'); 
      })
      .catch(() => {
        this.setState({ error: 'Credenciales incorrectas' });
      });
  }

  render() {
    const { email, password, error } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>

        <TextInput
          style={styles.field}
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="email"
          onChangeText={(t) => this.setState({ email: t })}
          value={email}
        />

        <TextInput
          style={styles.field}
          placeholder="contraseña"
          secureTextEntry
          onChangeText={(t) => this.setState({ password: t })}
          value={password}
        />

        {error ? <Text style={styles.error}>{error}</Text> : null}

        <Pressable
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Register')}
        >
          <Text style={styles.buttonText}>Ir al registro</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={() => this.onSubmit()}>
          <Text style={styles.buttonText}>Entrar</Text>
        </Pressable>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { paddingHorizontal: 10, marginTop: 20, flex: 1, alignSelf: 'stretch', justifyContent: 'center' },
  title: { fontSize: 22, fontWeight: '700', textAlign: 'center', marginBottom: 16 },
  field: {
    height: 20, paddingVertical: 15, paddingHorizontal: 10,
    borderWidth: 1, borderColor: '#ccc', borderStyle: 'solid',
    borderRadius: 6, marginVertical: 10,
  },
  button: {
    backgroundColor: '#28a745', paddingHorizontal: 10, paddingVertical: 6,
    borderRadius: 4, borderWidth: 1, borderColor: '#28a745',
    alignSelf: 'center', minWidth: 180,
    marginTop: 10
  },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: '700' },
  error: { color: 'crimson', marginBottom: 8, textAlign: 'center' },
});

export default Login;

