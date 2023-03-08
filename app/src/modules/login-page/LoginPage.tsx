import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Platform, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { fetchUser } from "../../redux/actions";
import { ScalingUtils } from "../AppUtils";
import { CustomButtom } from "../component";
const LoginPage = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const error = useSelector((state: any) => state.error);
    const loading = useSelector((state: any) => state.loading);
    useEffect(() => {
        dispatch(fetchUser());
    }, []);
    useEffect(() => {
        console.log("user>>> ",user);
        console.log(error);
        console.log(loading);
    }, [user,error]);
    const shadowStyle = {
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOpacity: 0.3,
                shadowOffset: { width: 0, height: 2 },
                shadowRadius: 2,
            },
            android: {
                elevation: 3,
            },
        }),
    }
    const navigation = useNavigation();
    const onClick = () => {
        navigation.goBack();
    }
    return (<View style={{ width: ScalingUtils.scaleWidth(100) }}>
        {(user && user.results.length > 0) && <Text style={{fontSize: ScalingUtils.scaleFont(14)}}>{user.results[0].email.toString()}</Text>}
        {error && <Text>{error.toString()}</Text>}

        <CustomButtom styles={[{
            margin: 20, width: "80%", height: 45,
            borderRadius: 26, backgroundColor: "#FFF", color: "#000"
        }, shadowStyle]} buttonName={"Go Back ->"} onClick={onClick}></CustomButtom>

    </View>)
}

export default LoginPage;