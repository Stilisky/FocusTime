import React from 'react'
import { Platform, SafeAreaView, Text, View, StatusBar } from 'react-native'
import { Searchbar } from 'react-native-paper'

// console.log(StatusBar.currentHeight);
const Search = () => {
   return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight}}>
      <View className="bg-[#00FF00] p-5">
         <Searchbar
            placeholder='Search'
         />
      </View>
      <View style={{ flex:1 }} className="p-5 bg-[#0000FF] ">
         <Text>
            List
         </Text>

      </View>
    </SafeAreaView>
   )
}

export default Search