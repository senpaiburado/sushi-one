import React, {useEffect, useState} from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native"
import { Button, ThemeProvider, Header, Card, Icon, Image } from 'react-native-elements';
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import OrderList from "./Components/OrderList";
import SushiMenu from "./Components/SushiMenu";

export const PAGE_INDEX = {
  ORDERS: 0,
  ADD: 1,
  FOOD_MENU: 2,
  SETTINGS: 3
}

export const arr = [
  { name: "Філадельфія з лососем", time: 6, price: 140, weight: 370, uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Золотий дракон", time: 8, discount: 30, price: 180, weight: 300, uri: "https://scontent-iev1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s640x640/170078398_490775915613578_8119871118693751164_n.jpg?tp=1&_nc_ht=scontent-iev1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=oMDgJXjiDGwAX-_5I87&edm=AP_V10EAAAAA&ccb=7-4&oh=2916a0441dad3bdd2a483914b6a84562&oe=609FA927&_nc_sid=4f375e" },
  { name: "Сет \"Америка\"", time: 19, price: 280, weight: 735, uri: "https://scontent-iev1-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/s750x750/170019493_211181310807601_4975685736580773260_n.jpg?tp=1&_nc_ht=scontent-iev1-1.cdninstagram.com&_nc_cat=101&_nc_ohc=2Y_xMNtBpSwAX_ubYkm&edm=AP_V10EAAAAA&ccb=7-4&oh=6aa3d94ab4181186fd5a738d210a5a2f&oe=609FF4CA&_nc_sid=4f375e" },
  { name: "Філадельфія з лососем", time: 6, price: 140, weight: 370, uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", time: 6, price: 140, weight: 370, uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", time: 6, price: 140, weight: 370, uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", time: 6, price: 140, weight: 370, uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", time: 6, price: 140, weight: 370, uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", time: 6, price: 140, weight: 370, uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", time: 6, price: 140, weight: 370, uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", time: 6, price: 140, weight: 370, uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
]

export default function MyApp () {
  const [page, setPage] = useState(0);
  const Page = (props) => {
    switch (page)
    {
      case PAGE_INDEX.ORDERS:
        return <OrderList></OrderList>
      case PAGE_INDEX.ADD:
        return <View></View>
      case PAGE_INDEX.FOOD_MENU:
        return <SushiMenu {...props} />
      case PAGE_INDEX.SETTINGS:
        return <View></View>
      default:
        console.error("Page not found")
    }
  }

  return (
    <ThemeProvider useDark>
      <SafeAreaProvider style={{height: "100vh"}}>
      <View style={{ width: "100%", height: "100vh", backgroundColor: "black" }}>
        <Header
          centerComponent={{ text: 'SUSHI ONE', style: { color: '#F23E46', fontSize: "16pt" } }}
          backgroundColor={"#292D3E"}
          containerStyle={{
            borderBottomColor: "#202431",
            height: "50px"
          }}
        />
        <View style={{display: "flex", flexDirection: "row", height: "calc(100vh-50px)", maxHeight: "calc(100vh-50px)", flex: 1}}>
          <LeftPanel setPage={setPage} />
          <Page arr={arr} />
        </View>
      </View>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

function LeftPanel(props) {
  const [index, setIndex] = useState(0);

  let getColor = (itemIdx) => {
    return itemIdx == index ? '#F23E46' : '#51586F';
  }

  useEffect(() => {
    if (props.setPage)
      props.setPage(index);
    else
      console.error("No function for changing page!")
  }, [index])

  return (
    <View style={styles.leftPanelContainer}>
      <TouchableOpacity style={{marginTop: "70%"}} onPress={() => { setIndex(PAGE_INDEX.ORDERS) }}>
        <Icon size={"26pt"}  name='tasks' type='font-awesome-5' color={getColor(PAGE_INDEX.ORDERS)}/>
      </TouchableOpacity >
      <TouchableOpacity style={{marginTop: "70%"}} onPress={() => { setIndex(PAGE_INDEX.ADD) }}>
        <Icon size={"26pt"} name='add-task' type='material' color={getColor(PAGE_INDEX.ADD)}/>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop: "70%"}} onPress={() => { setIndex(PAGE_INDEX.FOOD_MENU) }}>
        <Icon size={"26pt"} name='cutlery' type='font-awesome' color={getColor(PAGE_INDEX.FOOD_MENU)}/>
      </TouchableOpacity>
      <TouchableOpacity style={{marginTop: "70%"}} onPress={() => { setIndex(PAGE_INDEX.SETTINGS) }}>
        <Icon size={"26pt"} name='settings' type='ionicon' color={getColor(PAGE_INDEX.SETTINGS)}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  leftPanelContainer: {
    width: "70px",
    height: "calc(100vh - 50px)", 
    backgroundColor: "#292D3E"
  },
  leftPanelCard: {
    width: "60px",
    height: "60px", 
  },
  cardImg: {
    width: "100%",
    height: "150px"
  },
  card: {
    height: "300px",
    width: "280px",
    backgroundColor: "#292D3E",
    borderRadius: 10,
  }
})