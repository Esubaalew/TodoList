import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function App() {
    const [todos, setTodos] = useState(['Sample Todo']);
    const [newTodo, setNewTodo] = useState('');

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos, newTodo]);
            setNewTodo('');
        }
    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.headerText}>You have {todos.length} Todo(s)</Text>
                </View>
                <FlatList
                    data={todos}
                    renderItem={({ item, index }) => (
                        <View style={styles.todoContainer}>
                            <Text style={styles.todoTitle}>{item}</Text>
                            <TouchableOpacity style={styles.removeButton} onPress={() => removeTodo(index)}>
                                <View style={styles.closeIconContainer}>
                                    <MaterialIcons name="close" size={24} color="#fff" />
                                </View>
                            </TouchableOpacity>
                        </View>
                    )}
                    keyExtractor={(_, index) => index.toString()}
                    style={styles.todoList}
                />
                <View style={styles.addContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            placeholder="Add item"
                            value={newTodo}
                            onChangeText={(text) => setNewTodo(text)}
                        />
                    </View>
                    <TouchableOpacity style={styles.addButton} onPress={addTodo}>
                        <Text style={styles.addButtonLabel}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 20,
    },
    contentContainer: {
        height: '80%',
        paddingVertical: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    headerContainer: {
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    todoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    todoTitle: {
        flex: 1,
        fontSize: 16,
    },
    todoList: {
        marginBottom: 20,
    },
    addContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    inputContainer: {
        flex: 1,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
    input: {
        height: 40,
        paddingHorizontal: 10,
    },
    addButton: {
        backgroundColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#000',
    },
    addButtonLabel: {
        color: '#000',
        fontSize: 16,
        fontWeight: 'bold',
    },
    removeButton: {
        backgroundColor: '#ccc',
        borderRadius: 12,
        padding: 4,
    },
    closeIconContainer: {
        width: 24,
        height: 24,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
