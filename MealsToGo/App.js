import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import Search from './components/Search';

export default function App() {
  return (
    <>
      <Search/>
      <ExpoStatusBar style='auto'/>
    </>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
