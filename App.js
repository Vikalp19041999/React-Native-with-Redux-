import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { connect } from 'react-redux';
import { changeCount } from './actions/count';
import { bindActionCreators } from 'redux';

class App extends Component {

  state = { count: 0 };
  decrementCount() {
    let { count } = this.state;
    count--;
    this.setState({
      count
    })
  }

  incrementCount() {
    let { count } = this.state;
    count++;
    this.setState({
      count
    })
  }

  render() {
    const { count } = this.state;
    return (
      <View styles={styles.container}>
        <Button
          title="increment"
          onPress={() => this.incrementCount()}
        />
        <Text>{count}</Text>
        <Button
          title="decrement"
          onPress={() => this.decrementCount()}
        />
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

const mapStateToProps = state => ({
  count: state.count,
});

const ActionCreators = Object.assign(
  {},
  changeCount,
);
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ActionCreators, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App)