/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';

import {
  Colors,
  Header,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

import store from './src/store';
import { useAppDispatch, useAppSelector } from './src/store/hooks';
import { initializeApp, incrementUserInteractions } from './src/store/slices/appSlice';

function AppContent(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const dispatch = useAppDispatch();
  const appState = useAppSelector((state) => state.app);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    paddingBottom: 60,
  };

  useEffect(() => {
    // Trigger Redux action on app boot
    const bootTime = new Date().toISOString();
    dispatch(initializeApp(bootTime));
    console.log('App initialized with Redux at:', bootTime);
  }, [dispatch]);

  const handleUserInteraction = () => {
    dispatch(incrementUserInteractions());
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
            padding: 16,
          }}>

          {/* Redux State Display */}
          <View style={styles.reduxStateContainer}>
            <Text style={styles.reduxTitle}>Redux State:</Text>
            <Text style={styles.reduxText}>
              App Initialized: {appState.isInitialized ? 'Yes' : 'No'}
            </Text>
            <Text style={styles.reduxText}>
              Boot Time: {appState.bootTime}
            </Text>
            <Text style={styles.reduxText}>
              User Interactions: {appState.userInteractions}
            </Text>

            <TouchableOpacity
              style={styles.button}
              onPress={handleUserInteraction}
            >
              <Text style={styles.buttonText}>Trigger Redux Action</Text>
            </TouchableOpacity>
          </View>

          <LearnMoreLinks />
        </View>
      </ScrollView>
      <View style={{flex: 1}} >
        <KeyboardAvoidingView behavior={'height'} style={{ flex: 1 }}>
              <View style={{flex: 1}}>
                <TextInput
                  style={styles.textInput}
                  onFocus={handleUserInteraction}
                  placeholder="Focus here to trigger Redux action"
                />
            </View>
        </KeyboardAvoidingView>
       </View>
    </SafeAreaView>
  );
}

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
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
  reduxStateContainer: {
    backgroundColor: '#f0f0f0',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  reduxTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  reduxText: {
    fontSize: 14,
    marginBottom: 4,
    color: '#666',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
