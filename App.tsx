/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

import ParentComponent from './src/components/ParentComponent';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    paddingBottom: 60,
  };

  return (
    <SafeAreaView style={backgroundStyle} >
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          {/* Parent/Child Pressable Components */}
          <ParentComponent />

          <LearnMoreLinks />
        </View>
      </ScrollView>
      <View style={{flex: 1}} >
        <KeyboardAvoidingView behavior={'height'} style={{ flex: 1 }}>
              <View style={{flex: 1}}>
                <TextInput 
                  style={styles.textInput}
                  placeholder="Type here..."
                />
            </View>
        </KeyboardAvoidingView>
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    marginHorizontal: 8 * 1.3,
    textAlignVertical: 'center',
    borderRadius: 21,
    backgroundColor: 'white',
    paddingHorizontal:  8 * 2,
    paddingVertical: 8,
    paddingTop: 8,
    minHeight: 8 * 5,
  },
});

export default App;
