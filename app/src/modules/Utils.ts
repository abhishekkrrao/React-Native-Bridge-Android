import {
  PermissionsAndroid,
  Platform,
  DeviceEventEmitter,
  NativeModules,
} from "react-native";
const { ContactImageModule } = NativeModules;
export async function getContactImage(recordID:any) {
  try {
    const base64Image = await ContactImageModule.getContactImage(recordID);
    return "data:image/png;base64," + base64Image;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export const getAllContacts = () => {
  return new Promise((resolve, reject) => {
    const ContactsModule = NativeModules.ContactsModule;
    ContactsModule.getAllContacts().then((contacts:any)=>{
      // console.log(contacts)
      resolve(contacts);
    })
  })
};

export async function requestContactPermission() {
  if (Platform.OS === "android") {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: "Contacts Permission",
          message: "This app needs permission to access your contacts.",
          buttonPositive: "OK",
          buttonNegative: "Cancel",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.warn(err);
      return false;
    }
  } else {
    // Permission not required for iOS
    return true;
  }
}
