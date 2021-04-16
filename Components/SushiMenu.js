import React, {useEffect, useState} from "react";
import { View, StyleSheet, TouchableOpacity, ScrollView, Dimensions, Text } from "react-native"
import { Button, ThemeProvider, Header, Card, Icon, Image,  } from 'react-native-elements';
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaProvider } from 'react-native-safe-area-context';

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

export default function MyApp (props) {
  
  const maxCols = () => {
    let maxWidth = Dimensions.get("window").width - 70;
    let cardWidth = 310;
    return Math.floor(maxWidth / cardWidth);
  }
  return (
    <FlatList numColumns={maxCols()}
    data={props.arr}
    renderItem={({item}) => {
    return (
        <TouchableOpacity style={{"width": "280px", marginBottom: 30, flex:1}}>
            <Card containerStyle={styles.card}>
            <Card.Title style={{color: "white"}}>{item.name}</Card.Title>
            <Image
                style={styles.cardImg}
                resizeMode="stretch"
                source={{ uri: item.uri }}
            />
            <View style={{flexDirection: "row", marginTop: 30}}>
                <View style={{width: "50%", flexDirection: "row"}}>
                    <Icon
                        style={{marginTop: "30%"}}
                        name='weight-hanging'
                        type='font-awesome-5'
                        color='#F23E46'
                        size={15}
                    />
                    <Text style={styles.weight}>280г</Text>
                </View>
                <View style={{width: "50%", flexDirection: "row", justifyContent: "flex-end"}}>
                    <Icon style={{marginTop: "26%"}}
                        name='pricetag'
                        type='ionicon'
                        color='#F23E46'
                        size={16}
                    />
                    <Text style={styles.price}>140₴</Text>
                </View>
            </View>
            <View style={{flexDirection: "row", marginTop: 10}}>
                <View style={{width: "50%", flexDirection: "row"}}>
                    <Icon
                        style={{marginTop: "10%"}}
                        name='timer'
                        type='ionicon'
                        color='#F23E46'
                        size={19}
                    />
                    <Text style={styles.weight}>8 хв</Text>
                </View>
                <View style={{width: "50%", flexDirection: "row", justifyContent: "flex-end"}}>
                    <Icon style={{marginTop: "26%"}}
                        name='shopping-sale'
                        type='fontisto'
                        color='#F23E46'
                        size={16}
                    />
                    <Text style={styles.discount}>0₴</Text>
                </View>
            </View>
            </Card>
        </TouchableOpacity>)
    }}
    />
  );
};

const styles = StyleSheet.create({
  cardImg: {
    width: "100%",
    height: "150px"
  },
  card: {
    height: "300px",
    width: "280px",
    backgroundColor: "#292D3E",
    borderRadius: 10,
  },
  price: {
      color: "green",
      textAlign: "center",
      fontSize: 16,
      marginLeft: 6,
      width: 35
  },
  weight: {
      color: "lightgrey",
      textAlign: "left",
      fontSize: 16,
      marginLeft: 6,
      width: 100
  },
  discount: {
    color: "#c62828",
    textAlign: "center",
    fontSize: 16,
    marginLeft: 6,
    width: 35
  }
})