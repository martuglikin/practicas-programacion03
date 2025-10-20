import React, { Component } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

class DynamicForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comentario: '',
    };
  }

  onSubmit() {
    const { comentario } = this.state;
    console.log('Comentario enviado:', { comentario });
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Dejanos tu comentario</Text>


        <TextInput
          style={[styles.field, { height: 80 }]} 
          multiline
          placeholder="Escribí tu comentario..."
          onChangeText={(text) => this.setState({ comentario: text })}
          value={this.state.comentario}
        />

        <Pressable style={styles.button} onPress={() => this.onSubmit()}>
          <Text style={styles.buttonText}>Enviar</Text>
        </Pressable>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.previewTitle}>Vista previa</Text>
          <Text>{this.state.comentario}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    paddingHorizontal: 10,   
    marginTop: 20,           
    alignSelf: 'stretch',
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'left',
    marginBottom: 8,
  },
  field: {
    height: 20,             
    paddingVertical: 15,     
    paddingHorizontal: 10,   
    borderWidth: 1,         
    borderColor: '#ccc',     
    borderStyle: 'solid',  
    borderRadius: 6,         
    marginVertical: 10,      
    textAlignVertical: 'top' 
  },
  button: {
    backgroundColor: '#28a745', 
    paddingHorizontal: 10,      
    paddingVertical: 6,        
    borderRadius: 4,          
    borderWidth: 1,          
    borderStyle: 'solid',       
    borderColor: '#28a745',     
    alignSelf: 'center',
    minWidth: 160,
  },
  buttonText: {
    color: '#fff',           
    textAlign: 'center',  
    fontWeight: '700',
  },
  previewTitle: {
    fontWeight: '700',
    marginBottom: 6,
  },
});

export default DynamicForm;
