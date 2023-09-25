import React from 'react'
import { SafeAreaView, View, StatusBar} from 'react-native'
import MapView from 'react-native-maps'
import { Searchbar } from 'react-native-paper'

const Maps = () => {
  return (
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight}}>
         <View style={{  padding: 10}}>
            <Searchbar
               placeholder='Search'
            />
         </View>
         <View>
            <MapView style={{ height: "100%" }} />
         </View>
      </SafeAreaView>
  )
}

export default Maps