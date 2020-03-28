import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.view}>
        <Text style={styles.teste}>teste</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  view: {
    display: 'flex',
    alignItems: "center",
  },
  teste: {
    fontSize: 110
  }
});

export default App;
