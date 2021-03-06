import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Button } from "../components/Button";

import colors from "../styles/colors";
import fonts from "../styles/fonts";
interface Params {
  title: String,
  subtitle: string,
  buttonTitle: string,
  icon: 'smile' | 'hug',
  nextScreen: string
}

const emojis = {
  hug: '🤗',
  smile: '😄'
}

export function Confirmation() {
  const navagation = useNavigation();
  const router = useRoute();

  const {
    title,
    subtitle,
    buttonTitle,
    icon,
    nextScreen
  } = router.params as Params;
  function handleSumit() {
    navagation.navigate(nextScreen);
  }

  return (
    <SafeAreaView style={styles.contanier}>
      <View style={styles.content}>
        <Text style={styles.emojs}>
        {emojis[icon]}
        </Text>
        <Text style={styles.title}>
        {title}
        </Text>
        <Text style={styles.subtitle}>
          {subtitle}
        </Text>
      <View style={styles.footer}>
        <Button title={buttonTitle} onPress={handleSumit} />
      </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 30
  },
  title: {
    fontSize: 22, 
    fontFamily: fonts.heading,
    textAlign: "center",
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: "center",
    fontSize: 17, 
    paddingVertical: 10,
    color: colors.heading,
  },
  emojs: {
    fontSize: 78,
  },
  footer: {
    width: "100%",
    paddingHorizontal: 50,
    marginTop: 20
  },
});
