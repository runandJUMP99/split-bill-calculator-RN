import React, {useRef, useState} from "react";
import {Alert, Animated, Button, StyleSheet, Text, TextInput, View} from "react-native";
import CheckBox from "@react-native-community/checkbox";

const Calculator = () => {
    const [bill, setBill] = useState("");
    const [people, setPeople] = useState("");
    const [tip, setTip] = useState("");
    const [splitBill, setSplitBill] = useState(0);
    const [addTip, setAddTip] = useState(false);

    const slideAnim = useRef(new Animated.Value(50)).current;

    function handleBillChange(enteredBill) {
        setBill(enteredBill);
    }

    function handlePeopleChange(enteredPeople) {
        setPeople(enteredPeople);
    }

    function handleCalculate() {
        if (people <= 0) {
            Alert.alert("Invalid Input!", "Please enter a number greater than 0 for Total People.", [{style: "default"}])
        } else {
            let result = (bill / people);

            if (!result) {
                Alert.alert("Invalid Input!", "Check your values and try again.", [{style: "default"}])
                return;
            }

            if (addTip) {
                result += (bill * (tip / 100)) / people;
            }

            setSplitBill(result.toFixed(2));
        }
    }

    function handleAddTip() {
        if (!addTip) {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 250,
                useNativeDriver: false
            }).start();
        } else {
            Animated.timing(slideAnim, {
                toValue: 50,
                duration: 250,
                useNativeDriver: false
            }).start();

            setTip("");

            if (bill && people) {
                handleCalculate();
            }
        }
        
        setAddTip(prevValue => !prevValue);
    }

    function handleTipChange(enteredTip) {
        setTip(enteredTip);
    }

    return (
        <View style={styles.calculator}>
            <View>
                <TextInput style={styles.input} onChangeText={handleBillChange} placeholder="Total Bill" value={bill} keyboardType="numeric" />
                <TextInput style={styles.input} onChangeText={handlePeopleChange} placeholder="Total People" value={people} keyboardType="numeric" />
            </View>
            <View style={styles.tipCheckBox}>
                <CheckBox onChange={handleAddTip} value={addTip}/>
                <Text>Include Tip?</Text>
            </View>
            <View>
                <TextInput style={styles.input} onChangeText={handleTipChange} placeholder="Tip Percentage" value={tip.toString()} keyboardType="numeric" />
            </View>
            <Animated.View style={[styles.slideContainer, {bottom: slideAnim}]}>
                <View style={styles.button}>
                    <Button title="Calculate" onPress={handleCalculate} color="#28df99"/>
                </View>
                <Text style={styles.result}>$ {splitBill}</Text>
            </Animated.View>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        margin: 8,
        marginBottom: 32
    },
    calculator: {
        backgroundColor: "#f6f7d4",
        borderRadius: 8,
        elevation: 5,
        marginHorizontal: 16,
        padding: 16
    },
    input: {
        borderBottomColor: "#d2f6c5",
        borderBottomWidth: 1,
        margin: 8,
        padding: 5
    },
    result: {
        alignSelf: "center",
        fontSize: 32
    },
    slideContainer: {
        position: "relative"
    },
    tipCheckBox: {
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 16
    }
});

export default Calculator;