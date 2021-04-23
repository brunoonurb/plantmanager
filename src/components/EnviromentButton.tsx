import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors'
import fonts from "../styles/fonts";

interface EnviromentButtonPros extends RectButtonProps{
    title: string;
    active?: boolean;
}

export function EnviromentButton({
    title,
    active= false,
    ...rest
}: EnviromentButtonPros) {
    return (
        <RectButton
            style={[
                styles.contanier,
                active && styles.contanierActive
            ]}
            {...rest}
        >
            <Text style={[
                styles.text,
                active && styles.textActive
                ]}>
                {title}
            </Text>

        </RectButton>
    )}


const styles = StyleSheet.create({
    contanier: {
        backgroundColor: colors.shape,
        width:76,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center', 
        borderRadius: 12,
        marginRight:5
    },
    contanierActive: {
        backgroundColor: colors.green_light,
    },
    text: {
        color: colors.heading,
        fontFamily: fonts.text
    },
    textActive: {
        fontFamily: fonts.heading,
        color: colors.green_dark,
    },
  });
  