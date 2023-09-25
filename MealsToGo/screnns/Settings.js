import React, { useState } from 'react'
import { View, Text, SafeAreaView, StatusBar, Image } from 'react-native'
import SwitchToggle from "react-native-switch-toggle";

const Settings = () => {
   const [toggleValue, setToggleValue] = useState(false)
   const onToggle = () => {
      setToggleValue(!toggleValue);
    };

   const img = "https://source.unsplash.com/random"
  
  return (
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight}}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, padding: 18, backgroundColor: 'white' }}>ACCOUNT SETTINGS</Text>
            <View style={{ flex:1, backgroundColor: 'white' }}>
               <View style={{ padding:18, alignItems: 'center' }}  >
                  <Image source={{ uri: img }} style={{ width: 150, height:150, borderRadius: 60}} resizeMode="cover"/>
                  {/* <Image
                     source={{ uri: 'https://source.unsplash.com/random' }}
                     style={{ width: 20 }}
                     // className="w-10 h-10 rounded-full"
                     resizeMode="cover"
                  /> */}
                  <Text style={{ padding: 15, fontWeight: 'bold', fontSize: 18 }}>John Doe</Text>
               </View>
               <Text style={{ paddingLeft: 18, fontWeight: 'bold', fontSize: 18, alignItems: 'center'}}>Paramètres</Text>

               <View style={{padding: 18, fontWeight: 'bold', fontSize: 15, flexDirection: 'row', backgroundColor: '#E0EBF0', margin: 10, borderRadius: 20 }}>
                  <Text style={{ paddingTop: 5, marginRight: 15 }}>Activation des notifications</Text>
                  <SwitchToggle
                        containerStyle={{
                        marginTop: 0,
                        width: 60,
                        height: 30,
                        borderRadius: 15,
                        padding: 5,
                     }}
                     circleStyle={{
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                        backgroundColor: 'white',
                     }}
                     switchOn={toggleValue}
                     onPress={onToggle}
                  />
               </View>

               <View style={{padding: 18, fontWeight: 'bold', fontSize: 15, flexDirection: 'row', backgroundColor: '#E0EBF0', margin: 10, borderRadius: 20 }}>
                  <Text style={{ paddingTop: 5, marginRight: 15 }}>Activation des notifications</Text>
                  <SwitchToggle
                        containerStyle={{
                        marginTop: 0,
                        width: 60,
                        height: 30,
                        borderRadius: 15,
                        padding: 5,
                     }}
                     circleStyle={{
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                        backgroundColor: 'white',
                     }}
                     switchOn={toggleValue}
                     onPress={onToggle}
                  />
               </View>

               <View style={{padding: 18, fontWeight: 'bold', fontSize: 15, flexDirection: 'row', backgroundColor: '#E0EBF0', margin: 10, borderRadius: 20 }}>
                  <Text style={{ paddingTop: 5, marginRight: 15 }}>Activation des notifications</Text>
                  <SwitchToggle
                        containerStyle={{
                        marginTop: 0,
                        width: 60,
                        height: 30,
                        borderRadius: 15,
                        padding: 5,
                     }}
                     circleStyle={{
                        width: 24,
                        height: 24,
                        borderRadius: 12,
                        backgroundColor: 'white',
                     }}
                     switchOn={toggleValue}
                     onPress={onToggle}
                  />
               </View>
            </View>
      </SafeAreaView>
  )
}

export default Settings