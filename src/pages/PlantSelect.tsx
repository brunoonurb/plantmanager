import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import { EnviromentButton } from "../components/EnviromentButton";
import { Header } from "../components/Header";
import { PlantCardPrimary } from "../components/PlantCardPrimary";
import api from "../services/api";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

interface EnviromentProps {
  key: string;
  title: string;
}
interface PlantsProps {
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: [string];
  frequency: {
    times: number;
    repeat_every:  string;
  }
}

export function PlantSelect() {
  const [enviroments, setEnviroment] = useState<EnviromentProps[]>([]);
  const [plants, setPlants] = useState<PlantsProps[]>([]);

  useEffect(() => {
    async function fetchEnviront() {
      const { data } = await api.get("/plants_environments?_sort=title&_order=asc");
      setEnviroment([
        {
          key: "all",
          title: "Todos",
        },
        ...data,
      ]);
    }
    fetchEnviront();
  }, []);

  useEffect(() => {
    async function fetchPlants() {
      const { data } = await api.get("/plants?_sort=name&_order=asc");
      setPlants(data);
    }
    fetchPlants();
  }, []);

  return (
    <View style={styles.contanier}>
      <View style={styles.header}>
        <Header />
        <Text style={styles.title}>Em qual ambiente</Text>
        <Text style={styles.subtitle}>você quer sua planta?</Text>
      </View>

      <View>
        <FlatList
          data={enviroments}
          renderItem={({ item }) => <EnviromentButton title={item.title} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.enviromentList}
        />
      </View>

      <View style={styles.plants}>
        <FlatList
          data={plants}
          renderItem={({ item }) => <PlantCardPrimary data={item}/>}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          // contentContainerStyle={styles.contentContainerStyle}
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  enviromentList: {
    height: 40,
    justifyContent: "center",
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  },
  plants:{
    flex:1,
    paddingHorizontal:32,
    justifyContent: 'center'
  },
});
