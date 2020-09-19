import React from "react";
import {StyleSheet, Text, View} from "react-native";

const Header = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Split The Bill</Text>            
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        alignItems: "center",
        backgroundColor: "#f6f7d4",
        borderRadius: 8,
        justifyContent: "center",
        margin: 32,
        padding: 16,
    },
    text: {
        fontSize: 32,
        fontWeight: "bold"
    }
});

export default Header;