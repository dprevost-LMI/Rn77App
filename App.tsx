/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  // SafeAreaView,
  // ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';
import { KeyboardAvoidingView } from 'react-native-keyboard-controller';
import { KeyboardProvider } from 'react-native-keyboard-controller';


import {
  Colors,
  Header,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    paddingBottom: 60,
    flex: 1,
  };

  return (
    <KeyboardProvider>
      <View style={{flex: 1, flexDirection: 'column'}}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View style={backgroundStyle}>
          <Header />
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
            <LearnMoreLinks />
          </View>
        </View>
          <KeyboardAvoidingView behavior={'padding'} keyboardVerticalOffset={100} style={{ flex: 1, maxHeight: 30}}>
                <View style={{flex: 1}}>
                  <TextInput style={styles.textInput}/>
              </View>
          </KeyboardAvoidingView>
        </View>
    </KeyboardProvider>
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
