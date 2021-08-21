import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";
import { ImageBackgroundBase, Text, View, FlatList } from "react-native";
import { AuthRoutes } from '../../routes/auth.routes';

import { Header } from '../../components/Header'
import { Member } from "../../components/Member";
import { Background } from "../../components/Background";

import { theme } from "../../global/styles/themes";
import { styles } from "./style";
import BannerImg from '../../assets/banner.png';
import { ListHeader } from "../../components/ListHeader";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentCreate() { 
    const members = [
        {
            id:'1',
            username: 'Rafael',
            avatar_url: 'https://github.com/RafaSoull.png',
            status: 'online',
        },
        {
            id:'2',
            username: 'Rafael',
            avatar_url: 'https://github.com/RafaSoull.png',
            status: 'offline'
        },
    ];
    return (
        <Background>
            <Header
            title="Agendar Partida"
            
            />
        </Background>
    )
        }