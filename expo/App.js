import {Constants} from 'expo';
import React, {Component} from 'react';
import {Button, FlatList, StyleSheet, Switch, Text, View} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [
        this.makeTodo(1),
        this.makeTodo(2, true),
        this.makeTodo(3),
      ],
      onlyShowNotDone: false,
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.statusBar} />
        <Text style={styles.title}>React Native + Expo Todo List</Text>
        <View style={styles.options}>
          <Button
            onPress={this.addTodo}
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

  addTodo = () => {
    this.setState((prev) => ({todos: prev.todos.concat(this.makeTodo())}));
  }

  makeTodo = (number, done) => {
    const key = number ? number : this.state.todos.length + 1;
    return {
      done: done,
      key: `${key}`,
      text: `Todo Item #${key}`
    }
  }

  renderTodo = (todo) => {
    return (
      <View style={styles.todo} key={todo.key}>
        <View>
          <Switch onValueChange={() => this.toggleTodo(todo)} value={todo.done} />
        </View>
        <View>
          <Text>{todo.text}</Text>
        </View>
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
  statusBar: {
    backgroundColor: "transparent",
    minHeight: Constants.statusBarHeight,
  },
  title: {
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
    flexDirection: 'row'
  }
});
