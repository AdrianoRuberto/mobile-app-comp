/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, TextInput, FlatList, StyleSheet, Switch, Text, View} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      onlyShowNotDone: false,
      input: "",
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>React Native Todo List</Text>
        <View style={styles.options}>
          <TextInput
            style={{marginLeft: 10, width: 100, borderColor: "grey", borderWidth: 1}}
            onChangeText={(text) => this.setState({input: text})}
            value={this.state.input}
            placeholder="Type here"
          />
          <Button
            onPress={() => this.addTodo(this.state.input)}
            title="+ Add a todo"
            color="blue"
          />
          <View style={styles.hide}>
            <Text>Hide done</Text>
            <Switch
              onValueChange={(value) => this.setState({onlyShowNotDone: value})}
              value={this.state.onlyShowNotDone}
            />
          </View>
        </View>
        <FlatList
          data={this.state.todos.filter((todo) => !(todo.done && this.state.onlyShowNotDone))}
          renderItem={({item}) => this.renderTodo(item)} />
      </View>
    );
  }

  addTodo = (input) => {
    this.setState((prev) => ({todos: prev.todos.concat(this.makeTodo(input)), input: ""}));
  }

  makeTodo = (input, number, done) => {
    const key = number ? number : this.state.todos.length + 1;
    return {
      done,
      key: `${key}`,
      id: Math.floor(Math.random() * 100),
      text: `Todo Item #${key} : ${input}`,
    }
  }

  renderTodo = (todo) => {
    return (
      <View style={styles.todo} key={todo.key}>
        <Text style={{marginRight: 10}}>{todo.text}</Text>
        <Switch onValueChange={() => this.toggleTodo(todo)} value={todo.done} />
        <Text style={{marginLeft: 10}}>{`id: ${todo.id}`}</Text>
      </View>
    )
  }

  toggleTodo = (todo) => {
    const newTodo = {...todo, done: !todo.done};
    const index = this.state.todos.indexOf(todo);
    this.setState((prev) => ({todos: [...prev.todos.slice(0, index), newTodo, ...prev.todos.slice(index + 1, prev.length)]}));
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 30,
    textAlign: "center",
    fontSize: 24,
    margin: 10,
    borderBottomWidth: 1,
    borderColor: "grey"
  },
  container: {
    flex: 1,
  },
  hide: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  options: {
    flexDirection: 'row'
  },
  todo: {
    flex: 1,
    marginTop: 25,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "grey",
  }
});
