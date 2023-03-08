import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { View, Text, FlatList, Image } from "react-native";
import { ScalingUtils } from "../AppUtils";
import { CustomButtom } from '../component';
import {
    requestContactPermission,
    getAllContacts,
} from "../Utils";
import { styles } from './style';


const AppPage = () => {
    const [data, setData] = useState([]);

    const renderItem = (item:any,index:any) => {
   
        return (
            <View style={{ width: ScalingUtils.scaleWidth(100), flexDirection: "row", padding: 20 }}>
                {(item.image != "" && item.image != null) ? (
                    <Image
                        source={{ uri: ('data:image/png;base64,' + item.image) }}
                        style={{ width: 56, height: 56, borderRadius: 56 }} />
                ) : (
                    <View
                        style={{
                            width: 56, height: 56, borderRadius: 56,
                            backgroundColor: "grey"
                        }} />
                )}
                <View style={{ width: "100%", flexDirection: "column", paddingLeft: 20 }}>
                    <Text style={{fontSize:ScalingUtils.scaleFont(14),color:"#000",
                fontWeight:"700"}}>{item.name}</Text>
                    <Text style={{fontSize:ScalingUtils.scaleFont(12)}}>{item.phone}</Text>
                </View>
            </View>
        );
    };
    const Separator = () => (
        <View
            style={{
                height: 1,
                width: "100%",
                backgroundColor: "#CED0CE",
            }}
        />
    );

    const navigation= useNavigation();
    const onClick = () => {
        console.log("onClick");
        navigation.navigate('loginpage')
    }
    useEffect(() => {
        requestContactPermission().then(() => {
            getAllContacts()
                .then((value: any) => {
                    // console.log("Contact Image: " + value);
                    setData(value);
                })
                .catch(() => {
                    console.log('Permission required !');
                });
        });
    }, []);
    return (
        <View style={styles.container}>

            <CustomButtom styles={[{
                margin: 20, width: "80%", height: 45,
                borderRadius: 26,backgroundColor:"#FFF",color:"#000"
            },styles.shadowStyle]} buttonName={"Next ->"} onClick={onClick}></CustomButtom>

            <FlatList
                data={data}
                renderItem={(item:any,index:any)=>renderItem(item.item,index)}
                ItemSeparatorComponent={Separator}
                keyExtractor={(item, index: any) => index}
            />
        </View>
    );
};

export default AppPage;