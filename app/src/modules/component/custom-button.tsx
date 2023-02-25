import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import styles from './style'
const CustomButtom = (props: any) => {
    return (
        <View style={[styles.constainer, props.styles ? props.styles : {}]}>
            <TouchableOpacity style={styles.iconstainer} onPress={props.onClick}>
                <Text style={styles.text}>
                    {props.buttonName}
                </Text>
            </TouchableOpacity>
        </View>
    );
}
export { CustomButtom };