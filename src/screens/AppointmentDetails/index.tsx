import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Fontisto } from '@expo/vector-icons';
import { ImageBackground, Text, View, FlatList } from 'react-native';

import { Header } from '../../components/Header';
import { Member } from '../../components/Member';
import { Background } from '../../components/Background';

import { theme } from '../../global/styles/themes';
import { styles } from './styles';
import BannerImg from '../../assets/banner.png';
import { ListHeader } from '../../components/ListHeader';
import { ListDivider } from '../../components/ListDivider';
import { ButtonIcon } from '../../components/ButtonIcon';

export function AppointmentDetails() {
  const members = [
    {
      id: '1',
      username: 'Dione',
      avatar_url: 'https://github.com/dione-vianna.png',
      status: 'online',
    },
    {
      id: '2',
      username: 'Dione',
      avatar_url: 'https://github.com/dione-vianna.png',
      status: 'offline',
    },
  ];
  return (
    <Background>
      <Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={theme.colors.primary} />
          </BorderlessButton>
        }
      />

      <ImageBackground source={BannerImg} style={styles.banner}>
        <View style={styles.bannerContent}>
          <Text style={styles.title}>Lendários</Text>
          <Text style={styles.subtitle}>
            É hoje que vamos chegar ao challenger sem perder uma partida da md10
          </Text>
        </View>
      </ImageBackground>
      <ListHeader title="jogadores" subtitle="Total 03" />

      <FlatList
        data={members}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Member data={item} />}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        style={styles.members}
      />

      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </Background>
  );
}