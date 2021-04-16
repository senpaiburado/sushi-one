import React from "react";
import { View, ImageBackground, StyleSheet, Text } from "react-native";

export default function Card(props) {
    const { price, discount, width, height, uri, name, id } = props;

    return (
        <View>
            <ImageBackground source={{ uri: uri }} style={{ width, height }}>
                <View style={styles.container}>
                    <Text style={styles.text}>{name}</Text>
                    {!discount ? (
                        <Text style={styles.price}>{price}</Text>
                    ) : (
                        <View style={{display: "flex", flexDirection: "row"}}>
                            <Text style={styles.price}>{price}</Text>
                            <Text style={styles.discount}> (-{discount})</Text>
                        </View>
                    )}
                </View>
            </ImageBackground>
        </View>
        
    )
}

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 14,
        fontWeight: 600,
        textAlign: "left",
        marginLeft: 10,
        marginTop: "3px",

    },
    price: {
        color: "lightgreen",
        fontSize: 16,
        fontWeight: 600,
        textAlign: "right",
        marginRight: 0,
        marginTop: "5px",
        textIndent: "2px",

    },
    discount: {
        color: "red",
        fontSize: 16,
        fontWeight: 600,
        textAlign: "right",
        marginRight: 10,
        marginTop: "5px"
    },
    container: {
        top: "60%",
        left: 0,
        right: 0,
        bottom: 0,
        position: "absolute",
        backgroundColor: "black",
        opacity: 0.8,
        justifyContent: "space-between",
        display: "flex",
        flexDirection: "row"
    }
});