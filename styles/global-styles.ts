import { Colors } from "@/constants/Colors";
import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: Colors.background,
  },

  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 20,
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
    justifyContent: 'center',
    marginBlock: 18,
    paddingHorizontal: 10,
  },

  btn: {
    height: 80,
    width: 80,
    backgroundColor: Colors.darkGray,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 10,
  },

  textBtn: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: Colors.textPrimary,
    fontWeight: '300',
    fontFamily: 'SpaceMono',
  }
});