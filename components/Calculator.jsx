import React, {useState} from "react";
import {Button, StyleSheet, Text, TextInput, View} from "react-native";
import CheckBox from "@react-native-community/checkbox";

const Calculator = () => {
    const [bill, setBill] = useState("");
    const [people, setPeople] = useState("");
    const [tip, setTip] = useState("");
    const [splitBill, setSplitBill] = useState(0);
    const [addTip, setAddTip] = useState(false);

    function handleBillChange(enteredBill) {
        setBill(enteredBill);
    }

    function handlePeopleChange(enteredPeople) {
        setPeople(enteredPeople);
    }

    function handleCalculate() {
        if (people == 0) {
            setSplitBill("Please enter a number besides 0 for Total People");
        } else {
            let result = (bill / people);
            console.log(result);
            if (!result) {
                result = "Invalid Input. Check your values and try again!"
                setSplitBill(result);
                return;
            }

            if (tip) {
                console.log(tip);
                result += (bill * (tip / 100)) / people;
            }

            setSplitBill(result.toFixed(2));
        }
    }

    function handleAddTip() {
        setAddTip(prevValue => !prevValue);
    }

    function handleTipChange(enteredTip) {
        setTip(enteredTip);
    }

    return (
        <View style={styles.calculator}>
            <View>
                <TextInput style={styles.input} onChangeText={handleBillChange} placeholder="Total Bill" value={bill.toString()}/>
                <TextInput style={styles.input} onChangeText={handlePeopleChange} placeholder="Total People" value={people.toString()} />
            </View>
            <View style={styles.tipCheckBox}>
                <CheckBox onChange={handleAddTip} value={addTip}/>
                <Text>Include Tip?</Text>
            </View>
            <View style={styles.tip}>
                <TextInput style={styles.input} onChangeText={handleTipChange} placeholder="Tip Percentage" value={tip.toString()}/>
            </View>
            <View style={styles.button}>
                <Button title="Calculate" onPress={handleCalculate} color="#28df99"/>
            </View>
            <Text style={styles.result}>$ {splitBill}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
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
    tip: {
        // display: tip ? 
    },
    tipCheckBox: {
        alignItems: "center",
        flexDirection: "row",
        marginVertical: 16
    }
});

export default Calculator;