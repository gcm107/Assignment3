import { Button, Modal, FlatList, StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { useState } from 'react';
export default function App() {

  const [todos, setTodos] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);

  const [input, setInput] = useState('');
  

  // add item to list
  const addTodo = () => {

    if (input.trim()) {

      setTodos([...todos, {
         key: Date.now().toString(), 
         text: input }
        ]);

      setInput('');

      setModalVisible(false);
    }
  };


  // delete item from list
  const deleteTodo = (key) => {

    setTodos(todos.filter(

      item => item.key !== key)
    );
  };


  return (
    <View style={styles.container}>

      {/* Boomer Sooner!!!! */}
      <Image source={require('./assets/oulogo.png')} style={styles.logo} />


      <Text style={styles.title}>Personal To Do List</Text>
      
      <Button title="Add Todo" onPress={() => setModalVisible(true)}/>
      
      <FlatList
        data={todos}

        keyExtractor={(item) => item.key}

        renderItem={({ item }) => (

          <View style={styles.todoItem}>

            <Text style={styles.todoText}>{item.text}</Text>
            {/*  */}
            <Button title="Delete" onPress={() => deleteTodo(item.key)} />

          </View>

        )}

      />
      
      <Modal visible={modalVisible} animationType="slide">

        <View style={styles.modalContainer}>

          <Text style={styles.modalTitle}>Add New</Text>

          <TextInput

            style={styles.input}

            value={input}

            onChangeText={setInput}

            placeholder="Enter Something you need to do!"

          />
         
          <Button title="Cancel" onPress={() => setModalVisible(false)} />

          <Button title="Add" onPress={addTodo} />

        </View>
      </Modal>
    </View>
  );
};


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#841617',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },


  title: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },


  input: {
    backgroundColor: '#fff',
    width: 250,
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },


  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginVertical: 5,
    padding: 10,
    borderRadius: 5,
    width: 250,
    justifyContent: 'space-between',
  },


  todoText: {
    color: '#841617', // Boomer Sooner baby!
    fontSize: 16,
  },


  deleteText: {
    color: '#841617', // Boomer Sooner baby!
    fontWeight: 'bold',
  },
});
