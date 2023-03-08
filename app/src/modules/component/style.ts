import { StyleSheet } from "react-native";
import { ScalingUtils } from "../AppUtils";
const styles = StyleSheet.create({
    constainer: {
        width: "100%",
        backgroundColor: "#000",
        alignItems: "center",justifyContent: "center",
        alignContent:"center"
    },
    iconstainer: {
        width: "100%",
        alignItems: "center",justifyContent: "center",
alignContent:"center"
    },
    text: {
        color: "#000",
        fontSize: ScalingUtils.scaleFont(14),
        textAlign: "center"
    }
});
export default styles;