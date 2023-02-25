package com.app.bridge;

import android.content.ContentUris;
import android.net.Uri;
import android.provider.ContactsContract;
import android.util.Base64;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;

import android.content.ContentResolver;
import android.content.Context;
import android.database.Cursor;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

class ContactsModule extends ReactContextBaseJavaModule {

    public ContactsModule(@NonNull ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "ContactsModule";
    }

    @ReactMethod
    public void getAllContacts(Promise promise) {
        // Get a reference to the ContentResolver
        Context context = getReactApplicationContext();
        ContentResolver contentResolver = context.getContentResolver();

        // Define the columns you want to retrieve from the ContactsContract content provider
        String[] projection = {
                ContactsContract.CommonDataKinds.Phone.CONTACT_ID,
                ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME,
                ContactsContract.CommonDataKinds.Phone.NUMBER,
                ContactsContract.CommonDataKinds.Photo.PHOTO
        };

        // Execute the query to retrieve all contacts
        Cursor cursor = contentResolver.query(
                ContactsContract.CommonDataKinds.Phone.CONTENT_URI,
                projection,
                null,
                null,
                null
        );

        // Create a new array to hold the contact data
        WritableArray contactsArray = new WritableNativeArray();

        // Check if the query returned any results
        if (cursor != null && cursor.moveToFirst()) {
            // Loop through the cursor to retrieve the mobile number and image for each contact
            do {
                // Retrieve the display name, mobile number, and image from the cursor

                String displayName = cursor.getString(cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME));
                String mobileNumber = cursor.getString(cursor.getColumnIndex(ContactsContract.CommonDataKinds.Phone.NUMBER));

                Uri contactUri = ContentUris.withAppendedId(ContactsContract.Contacts.CONTENT_URI, getContactId(displayName, context));
                InputStream inputStream = ContactsContract.Contacts.openContactPhotoInputStream(contentResolver, contactUri);


                String imageBase64 = "";
                if (inputStream != null) {
                    imageBase64 = inputStreamToBase64String(inputStream);
                }

                // Create a new map to hold the contact data
                WritableMap contactMap = new WritableNativeMap();
                contactMap.putString("name", displayName);
                contactMap.putString("phone", mobileNumber);
                contactMap.putString("image", imageBase64);

                // Add the contact map to the contacts array
                contactsArray.pushMap(contactMap);
            } while (cursor.moveToNext());
        }

        // Close the cursor
        if (cursor != null) {
            cursor.close();
        }

        // Pass the contacts array back to the React Native view
        if (contactsArray != null) {
//            getReactApplicationContext()
//                    .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
//                    .emit("contactsRetrieved", contactsArray);
            promise.resolve(contactsArray);
        }

    }

    public long getContactId(String contactName, Context context) {
        long contactId = -1;
        ContentResolver contentResolver = context.getContentResolver();

        // Retrieve contact ID based on contact name
        Uri uri = ContactsContract.Contacts.CONTENT_URI;
        String[] projection = new String[]{ContactsContract.Contacts._ID};
        String selection = ContactsContract.CommonDataKinds.Phone.DISPLAY_NAME + " = ?";
        String[] selectionArgs = new String[]{contactName};
        Cursor cursor = contentResolver.query(uri, projection, selection, selectionArgs, null);

        // If contact found, get the contact ID
        if (cursor != null && cursor.moveToFirst()) {
            contactId = cursor.getLong(cursor.getColumnIndex(ContactsContract.Contacts._ID));
            cursor.close();
        }

        return contactId;
    }

    public String inputStreamToBase64String(InputStream inputStream) {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        byte[] buffer = new byte[1024];
        int length;
        try {
            while ((length = inputStream.read(buffer)) != -1) {
                byteArrayOutputStream.write(buffer, 0, length);
            }
            byteArrayOutputStream.flush();
            inputStream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        byte[] imageBytes = byteArrayOutputStream.toByteArray();
        return Base64.encodeToString(imageBytes, Base64.DEFAULT);
    }

}

