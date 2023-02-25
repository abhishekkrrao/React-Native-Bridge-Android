package com.joolkart.bridge

import android.Manifest
import android.app.Activity
import android.content.Intent
import android.content.pm.PackageManager
import android.os.Build
import android.widget.Toast
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.facebook.react.bridge.*

class PermissionUtills(val mContext: ReactApplicationContext) : BaseBridge(mContext),ActivityEventListener  {

    @ReactMethod
    fun requestCameraPermission(promis: Promise) {
        promis.resolve(true);
    }

    @ReactMethod
    private fun checkPermission(permission: String, requestCode: Int,promise: Promise) {
        var perm= ContextCompat.checkSelfPermission(this.reactApplicationContext, Manifest.permission.CAMERA)
        promise.resolve(perm)
    }

    override var permissionCheck: Any?
        get() = TODO("Not yet implemented")
        set(value) {}

    @Override
    override fun onRequestPermissionsResult(
        requestCode: Int,
        permissions: Array<String>,
        grantResults: IntArray
    ) {
        onRequestPermissionsResult(requestCode, permissions, grantResults)
        if (requestCode == 1001) {
            if (grantResults.isNotEmpty() && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                Toast.makeText(mContext, "Camera Permission Granted", Toast.LENGTH_SHORT).show()
            } else {
                Toast.makeText(mContext, "Camera Permission Denied", Toast.LENGTH_SHORT).show()
            }
        } else if (requestCode == 1002) {
            if (grantResults.isNotEmpty() && grantResults[0] == PackageManager.PERMISSION_GRANTED) {
                Toast.makeText(mContext, "Storage Permission Granted", Toast.LENGTH_SHORT).show()
            } else {
                Toast.makeText(mContext, "Storage Permission Denied", Toast.LENGTH_SHORT).show()
            }
        }
    }

    override fun getName(): String {
        return "PermissionModule";
    }

    override fun onActivityResult(
        activity: Activity?,
        requestCode: Int,
        resultCode: Int,
        data: Intent?
    ) {
        println("requestCode")
        println(requestCode)
        println("resultCode")
        println(resultCode)
        println("data")
        println(data)
    }

    override fun onNewIntent(intent: Intent?) {
        println("intent")
        println(intent)
    }
}