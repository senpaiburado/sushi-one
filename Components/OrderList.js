import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import {Button} from "react-native-elements";
import {arr} from "../App"

let orders = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]

function OrderItem(props) {
    let [isExpanded, setExpanded] = useState(false);
    return (
        <View>
            <TouchableOpacity onPress={() => { setExpanded(!isExpanded) }}>
                <View style={styles.orderRow}>
                    <Text style={styles.text}>Владислав</Text>
                    <Text style={styles.text}>+380666122552</Text>
                    <Text style={styles.text}>16:50</Text>
                    <Text style={[styles.text, {color: "orange"}]}>Доставка</Text>
                    <Text style={[styles.text, { color: "green", fontWeight: 600 }]}>280₴</Text>
                    <Text style={styles.text}>300г</Text>
                    <Button containerStyle={{"alignSelf":"center", width: "150px"}} title={"Подробиці"} onPress={(e) => { e.stopPropagation(); e.preventDefault() }}></Button>
                </View>
            </TouchableOpacity>
        {isExpanded ? (
            <View>
                <FlatList data={[1,2,3]}
                style={{borderRightColor: "#292D3E", borderRightWidth: 2, borderLeftColor: "#292D3E", borderLeftWidth: 2, borderBottomColor: "#292D3E",
                            borderBottomWidth: 2}}
                ItemSeparatorComponent={() => {
                    return <View style={{ backgroundColor: "#292D3E", width: "100%", height: 2 }}></View>
                }}
                renderItem={({index}) => {
                    return (
                        <View style={{flexDirection: "row"}}>
                            <Image resizeMode="stretch" style={{width: 60, height: 60}} width={60} height={60} source={{ uri: arr[index].uri }} />
                            <Text style={{color: "white"}}>{arr[index].name}</Text>
                        </View>
                    )
                }} />
            </View>
        ) : <></>}
        </View>
    )
}

export default function OrderList(props) {

    return (
        <FlatList data={orders}
        style={{padding: 50}}
        contentContainerStyle={{ flexGrow: 1, justifyContent: "space-between",}}
        renderItem={function ({item}) {
            return <OrderItem {...item} />
        }}
        ListHeaderComponent={() => {
            return (
                <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 30, padding: 10}}>
                    <Text style={styles.headerText}>Ім'я</Text>
                    <Text style={styles.headerText}>Телефон</Text>
                    <Text style={styles.headerText}>Час, дата</Text>
                    <Text style={styles.headerText}>Отримання</Text>
                    <Text style={styles.headerText}>Ціна</Text>
                    <Text style={styles.headerText}>Вага</Text>
                    <Text style={styles.headerText}>Дія</Text>
                </View>
            )
        }} />
    )
}

const styles = StyleSheet.create({
    headerText: {
        color: "white",
        fontWeight: 600,
        fontSize: 18,
        width: "150px",
        extAlign: "center"
    },
    text: {
        color: "white",
        fontSize: 15,
        textAlignVertical: "center",
        alignSelf: "center",
        width: "150px",
    },
    orderRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        height: "60px",
        backgroundColor: "#292D3E",
        marginTop: 7,
        paddingLeft: 10,
        paddingRight: 10,
        // borderRadius: 3
    }
});