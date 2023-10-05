import { Dispatch, SetStateAction } from "react";
import { ImageStyle, TextStyle, ViewStyle } from "react-native";

export type TElement = any;
export type TStyles = ViewStyle | TextStyle | ImageStyle;
export type TOnChangeText = (text: string) => void;
export type TSetBoolean = Dispatch<SetStateAction<boolean>>;

export type TSetState<T> = Dispatch<SetStateAction<T>>;

export type TUser = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
};
export type TStyled = { style?: TStyles };
