import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ButtonGroup, Input, Overlay } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";

export default function AddOrder() {

    const [destinationIndex, setDestIndex] = useState(0);
    const [paymentMethod, setPaymentMethod] = useState(0);
    const [clientName, setClientName] = useState("");

    useEffect(() => {
        console.log(clientName);
    }, [clientName])

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.title}>Додати замовлення</Text>
            <View style={styles.inputRow}>
                <Input value={clientName} onChangeText={setClientName} containerStyle={{width: "30%"}} label={"Ім'я"} leftIcon={{ name: "person", type: "ionicon" }} placeholder={"Іван"} leftIconContainerStyle={{color: "red"}} />
                <Input keyboardType={"numeric"} containerStyle={{width: "30%"}} label={"Телефон"} leftIcon={{ name: "contacts", type: "material" }} placeholder={"+380"} leftIconContainerStyle={{color: "red"}} />
            </View>
            <View style={styles.inputRow}>
                <Input containerStyle={{width: "30%"}} label={"Кількість персон"} leftIcon={{ name: "group", type: "font-awesome" }} placeholder={"3"} leftIconContainerStyle={{color: "red"}} />
                <Input containerStyle={{width: "30%"}} label={"Година"} leftIcon={{ name: "timer", type: "ionicons" }} placeholder={"Дата/година"} leftIconContainerStyle={{color: "red"}} />
            </View>
            <View style={styles.inputRow}>
                <ButtonGroup containerStyle={{width: "50%" }} buttons={["Готівка", "Картка"]} selectedIndex={paymentMethod} onPress={setPaymentMethod}/>
            </View>
            <View style={styles.inputRow}>
                <ButtonGroup containerStyle={{width: "50%" }} buttons={["Самовивіз", "Доставка"]} selectedIndex={destinationIndex} onPress={setDestIndex}/>
            </View>
            {destinationIndex ? (
                <View style={styles.inputRow}>
                    <Input containerStyle={{width: "30%"}} label={"Адреса доставки"} leftIcon={{ name: "truck-delivery", type: "material-community" }} placeholder={"Населений пункт, вулиця, будинок"} leftIconContainerStyle={{color: "red"}} />
                </View>
            ) : <></>}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        flex: 1,
    },
    title: {
        color: "white",
        fontSize: 26,
        fontWeight: 700,
        alignSelf: "center",
        marginBottom: 50
    },
    inputRow: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: 10
    }
});