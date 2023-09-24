import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import Restaurants from './screnns/Restaurants';

export default function App() {
  return (
    <>
      <Restaurants/>
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
