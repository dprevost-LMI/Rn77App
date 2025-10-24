import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';

interface ChildComponentProps {
  title: string;
}

const ChildComponent: React.FC<ChildComponentProps> = ({ title }) => {
 if(false) {  return (
    <View
      style={styles.childContainer}
    >
      <Text style={styles.childText}>{title}</Text>
    </View>
  );
} else {

  return (
    <Pressable
      style={styles.childContainer}
    >
      <Text style={styles.childText}>{title}</Text>
    </Pressable>
  );
}
};

const styles = StyleSheet.create({
  childContainer: {
    backgroundColor: '#e8f4fd',
    padding: 20,
    margin: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  childText: {
    fontSize: 16,
    color: '#1976D2',
    textAlign: 'center',
    fontWeight: '500',
  },
});

export default ChildComponent;