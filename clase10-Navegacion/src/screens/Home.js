import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import DynamicForm from '../components/DynamicForm';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Formulario de Home:</Text>
        <DynamicForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, alignSelf: 'stretch', paddingHorizontal: 16 },
  label: { fontSize: 18, fontWeight: '600', marginBottom: 8, textAlign: 'left' },
});

export default Home;