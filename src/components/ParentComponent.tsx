import React from 'react';
import { Pressable, Text, StyleSheet, View } from 'react-native';
import ChildComponent from './ChildComponent';

const ParentComponent: React.FC = () => {
  const handleParentPress = () => {
    console.log('Parent Pressable pressed!');
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.parentContainer}
        onPress={handleParentPress}
      >
        <Text style={styles.parentText}>Parent Component</Text>
        <View pointerEvents="box-only">
            <ChildComponent title="Child Component" />
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  parentContainer: {
    backgroundColor: '#fff3e0',
    padding: 30,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FF9800',
    minWidth: 300,
  },
  parentText: {
    fontSize: 18,
    color: '#F57C00',
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ParentComponent;