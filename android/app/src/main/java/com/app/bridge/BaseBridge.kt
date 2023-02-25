package com.joolkart.bridge

import com.facebook.react.bridge.ActivityEventListener
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.WritableNativeMap

abstract class BaseBridge(context:ReactApplicationContext):ReactContextBaseJavaModule(context) {
    abstract var permissionCheck: Any?

    protected fun sucess(data:WritableNativeMap?=null){
        val response = WritableNativeMap();
        response.putBoolean("sucess",true);
        response.putMap("data",data);
    }
    protected fun error(data:WritableNativeMap?=null){
        val response = WritableNativeMap();
        response.putBoolean("sucess",false);
        response.putMap("data",data);
    }

    abstract fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<String>,
        grantResults: IntArray
    )
}