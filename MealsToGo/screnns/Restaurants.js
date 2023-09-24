import React from 'react'
import { SafeAreaView, Text, View, StatusBar, FlatList } from 'react-native'
import { Searchbar } from 'react-native-paper'
import Restau from '../components/RestauInfo'

const Restaurants = () => {
  return (
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight}}>
         <View style={{ backgroundColor: 'white', padding: 10 }}>
            <Searchbar
               placeholder='Search'
            />
         </View>
         <View style={{ flex:1, padding: 10, backgroundColor: "white"}} >
            <FlatList
               data={[
                  {name: 1},
                  {name: 2},
                  {name: 3},
                  {name: 4},
               ]}
               renderItem={() => <Restau/>}
               keyExtractor={(item) =>item.name}
               contentContainerStyle={{ padding: 15 }}
            />
            
         </View>
      </SafeAreaView>
   )
}

export default Restaurants