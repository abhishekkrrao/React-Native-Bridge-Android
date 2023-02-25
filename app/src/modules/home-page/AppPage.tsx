import React, { useEffect, useRef, useState } from "react";
import {
    View,
    Text,
    FlatList,
    Image
} from "react-native";
import { CustomButtom } from '../component';
import {
    requestContactPermission,
    getAllContacts,
} from "../Utils";
import { styles } from './style';
const AppPage = () => {
    const [data, setData] = useState([]);

    const renderItem = ({ item }) => {
        return (
            <View style={{ width: "100%", flexDirection: "row", padding: 20 }}>
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
                    <Text>{item.name}</Text>
                    <Text>{item.phone}</Text>
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

    const onClick = () => {
        console.log("onClick")
    }
    useEffect(() => {
        requestContactPermission().then(() => {
            getAllContacts()
                .then((value: any) => {
                    // console.log("Contact Image: " + value);
                    setData(value);
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    }, []);
    return (
        <View style={styles.container}>

            <CustomButtom styles={{margin:20,width:"80%",height:45,
        borderRadius:26}}buttonName={"Submit"} onClick={onClick}></CustomButtom>

            <FlatList
                data={data}
                renderItem={renderItem}
                ItemSeparatorComponent={Separator}
                keyExtractor={(item, index: any) => index}
            />
        </View>
    );
};

export { AppPage };