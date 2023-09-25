import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import Restaurants from './screnns/Restaurants';
import { NavigationContainer} from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Maps from './screnns/Maps';
import Settings from './screnns/Settings';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function App() {
  const Tab = createBottomTabNavigator()

  return (
    <>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size}) => {
              let iconName;

              if (route.name === "Restaurants") {
                iconName = "md-restaurant";
              } else if (route.name === "Map") {
                iconName = "md-map";
              } else if (route.name === "Settings") {
                iconName =  "md-settings";
              }

              return <Ionicons name={iconName} size={size} color={color}/>
            },
          })}
          tabBarOptions = {{ 
            activeTintColor: "tomato",
            inactiveTintColor: "gray"
           }}
        >
          <Tab.Screen name='Restaurants' component={Restaurants} options={{ headerShown: false }}/>
          <Tab.Screen name='Map' component={Maps} options={{ headerShown: false }}/>
          <Tab.Screen name='Settings' component={Settings} options={{ headerShown: false }}/>
        </Tab.Navigator>
      </NavigationContainer>
      {/* <Restaurants/> */}
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
