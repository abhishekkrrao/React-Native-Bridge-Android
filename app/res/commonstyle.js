'use strict';
import colors from './Color.js';
import * as CustomFont from "../src/components/customfont"
import {
  Platform
} from 'react-native';
export default {
  width100: { width: '100%' },
  marT20: { marginTop: 20 },
  marT15: { marginTop: 15 },
  marT10: { marginTop: 10 },
  marT5: { marginTop: 5 },
  pad20: { padding: 20 },
  padT20: { paddingTop: 20 },
  padL20: { paddingLeft: 20 },
  padR20: { paddingRight: 20 },
  padLR20: { paddingLeft: 20, paddingRight: 20 },
  flex1: {
    flex: 1
  },
  whiteBG: {
    backgroundColor: '#fff',
  },
  alignSelfCenter: { alignSelf: 'center' },
  shadow: {
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    elevation: 5,
  },
  shadowStraight: {
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    elevation: 3,
  },
  shadowBottom: {
    shadowColor: colors.shadowColor,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
    elevation: 3,
  },

  // Ripple Btn

  btnView: { borderRadius: 25, overflow: 'hidden', marginTop: 20 },
  btnFullWidth: {
    width: '100%',
  },
  btnStyle: {
    alignSelf: 'center',
    height: 48,
    backgroundColor: colors.btnColor,
    justifyContent: 'center',
    borderRadius: 25,
  },
  btnOutlineStyle: {
    alignSelf: 'center',
    height: 45,
    justifyContent: 'center',
    borderRadius: 25,
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#000',
    flexDirection: 'row',
  },
  btnTxtStyle: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    fontWeight: '800',
  },

  btnOutlineView: {
    borderRadius: 25,
    overflow: 'hidden',
    marginTop: 20,
  },

  socialBtnView: {
    borderRadius: 25,
    overflow: 'hidden',
  },
  socialBtnStyle: {
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    height: 45,
    marginTop: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#00000099',
    flexDirection: 'row',
  },
  socialBtn: {},
  socialImg: { width: 22, height: 20 },
  socialTxt: {
    color: '#000',
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
  },
  commonTextStyle: {},
  bottomBtnContainer: {
    position: 'absolute',
    bottom: Platform.OS == "android" ? -30 : 0,
    left: 0,
    right: 0,
    height: 100,
    backgroundColor: CustomFont.appColor.white,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    borderTopWidth: 1,
    borderTopColor: "#f2f2f2"
  },
  bottomBtnContainer1: {
    elevation: 5,
    backgroundColor: CustomFont.appColor.white,
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottombtnStyle: {
    width: '85%',
    backgroundColor: colors.btnColor,
    borderRadius: 25,
    height: 48,
    marginLeft: 10,
    justifyContent: 'center',
  },
  bottomBtnTxt: {
    textAlign: 'center',
    color: CustomFont.appColor.white,
    fontWeight: 'bold',
  },
  cardShadowStyle: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  errorTextStyle: {
    color: '#B00020',
    fontSize: 10,
  },
  androidRippleStyle: {
    color: '#cccccca6'
  },
  container: { 
    flex: 1,
    backgroundColor: colors.drawer.background 
  },
  rippleEffect : { color: '#cccccca6', borderless: false },
  commonButton : {
    width: '49%',
    backgroundColor: colors.btnColor,
    borderRadius: 25,
    height: 48,
    marginLeft: 10,
    justifyContent: 'center',
  },
  commonApplyButton : {
    backgroundColor: colors.btnColor,
    borderRadius: 25,
    height: 48,
    marginLeft: 10,
    justifyContent: 'center',
  },
  commonApplyCmn : {
    backgroundColor: colors.btnColor,
    borderRadius: 25,
    justifyContent: 'center'
  }
};
