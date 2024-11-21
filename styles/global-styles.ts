import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    // paddingTop: 30,
    // paddingBottom: 30,
  },

  displayContainer: {
    flex: 4,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
  },

  btnContainer: {
    flex: 6,
    borderTopColor: Colors.darkGray,
    borderTopWidth: 2,
    justifyContent: 'space-around',
    // paddingBottom: 20,
  },

  result: {
    color: Colors.textPrimary,
    fontSize: 70,
    textAlign: 'right',
    fontWeight: 700,
  },

  subResult: {
    color: Colors.textSecondary,
    fontSize: 40,
    textAlign: 'right',
    fontWeight: 300,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },

  btn: {
    height: 80,
    width: 80,
    // backgroundColor: Colors.darkGray,
    // borderRadius: 100,
    marginHorizontal: 5,
  },

  textBtn: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: Colors.orange,
    fontWeight: '300',
    fontFamily: 'SpaceMono',
  },

  textBtnNumber: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: "white",
    fontWeight: '300',
    fontFamily: 'SpaceMono',
  },

  textBtnEqual: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 20,
    color: "white",
    fontWeight: '300',
    fontFamily: 'SpaceMono',
    borderRadius: 100,
    backgroundColor: Colors.orange
  },

  textOrange: {
    color: Colors.orange
  }
});