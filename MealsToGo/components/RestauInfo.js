import React from 'react'
import { SafeAreaView, Text, View, StatusBar, Image } from 'react-native'
import { Card, Searchbar } from 'react-native-paper'
import { SvgXml } from 'react-native-svg';
import opensvg from '../assets/open'

// console.log(StatusBar.currentHeight);
const Restau = ({ restaurant = {} }) => {
   const {
      name = "Delicious Miam",
      icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png", 
      photo = "https://media.post.rvohealth.io/wp-content/uploads/2022/11/2602810-13-Best-Prepared-Meal-Delivery-Services-of-2022-Feature-732x549.jpg", 
      addresse = "Maloni du 17", 
      isopenNow = true, 
      ratting = 4.5, 
      isClosed = false
   } = restaurant

   const xml = `<svg height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 47.94 47.94" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path style="fill:#edaa35;" d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757 c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042 c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685 c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528 c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956 C22.602,0.567,25.338,0.567,26.285,2.486z"></path> </g></svg>`
   
   const ratingArray = Array.from(new Array(Math.floor(ratting))) //Build array and give him ratting in length
   return (
    <>
      <Card elevation={5} style={{ backgroundColor:"white", marginBottom: 10}}>
         <Card.Cover key={name} style={{ padding: 15, backgroundColor: "white" }} source={{ uri: photo }}/>
         <Text style={{ padding: 15,fontSize:16, marginTop: -15, fontWeight: 'bold' }}> {name} </Text>
         <View style={{ flexDirection: "row", paddingBottom: 15, paddingLeft:18, marginTop: -10 }}>
            <View style={{ flexDirection: "row"}}>
               {ratingArray.map(() => 
                  <SvgXml xml={xml} width={20} height={20} style={{ marginRight: 5 }} /> 
               )}
            </View>
            {isClosed && <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-end',paddingRight:16 }}>
               <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 15, marginRight:5 }} >Fermé</Text> 
               <Image source={{ uri: icon }} style={{ width: 20 }} />
            </View>}
            {isopenNow && <View style={{ flex:1, flexDirection: 'row', justifyContent: 'flex-end',paddingRight:16 }}>
               <SvgXml xml={opensvg} width={20} height={20} style={{ marginRight:5 }} />
               <Image source={{ uri: icon }} style={{ width: 20 }} />
            </View>}
         </View>
         <Text style={{ fontSize: 16, paddingLeft: 15, marginTop: -10, paddingBottom: 6   }}> {addresse} </Text>
      </Card>
    </>
   )
}

export default Restau