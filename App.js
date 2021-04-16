import React, {useEffect, useState} from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from "react-native"
import { Button, ThemeProvider, Header, Card, Icon, Image } from 'react-native-elements';
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SushiMenu from "./Components/SushiMenu";

export const PAGE_INDEX = {
  ORDERS: 0,
  ADD: 1,
  FOOD_MENU: 2,
  SETTINGS: 3
}

const arr = [
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
  { name: "Філадельфія з лососем", uri: "https://static.tildacdn.com/tild6631-3433-4562-b030-336536356434/_premium.jpg" },
]

export default function MyApp () {
  const [page, setPage] = useState(0);
  const Page = (props) => {
    switch (page)
    {
      case PAGE_INDEX.ORDERS:
        return <View></View>
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