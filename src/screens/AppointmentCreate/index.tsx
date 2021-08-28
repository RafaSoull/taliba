import React,{ useState} from "react";
import {  ScrollView,Text,View, KeyboardAvoidingView, Platform, } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { SmallInput } from '../../components/SmallInput';
import { TextArea } from '../../components/TextArea';
import { Button } from '../../components/Button';
import { CategorySelect } from '../../components/CategorySelect';
import { ModalView } from '../../components/ModalView';
import { GuildIcon } from '../../components/GuildIcon';
import { NavigationContainer } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import { BorderlessButton } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { Fontisto } from "@expo/vector-icons";
import { ImageBackgroundBase, FlatList } from "react-native";
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
    const [category, setCategory] = useState('');
    const [openGuildsModa, setOpengGuildsModal] = useState(false);

    function handleOpenGuilds() {
        setOpengGuildsModal(true);
    }

    function handleCloseGuilds() {
        setOpengGuildsModal(false);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Background>
                <ScrollView>
                    <Header title="Agendar partidas" />

                    <Text
                        style={[
                            styles.label,
                            { marginLeft: 24, marginTop: 36, marginBottom: 18 },
                        ]}
                    >
                        Categoria
                    </Text>
                    <CategorySelect
                        hasCheckBox
                        setCategory={setCategory}
                        categorySelect={category}
                    />
                    <View style={styles.form}>
                        <RectButton>
                         <View style={styles.select}>
                             {<GuildIcon />}
                            
                         <View style={styles.selectBody}>
                             <Text style={styles.label}>Selecionar um servidor</Text>
                            </View>
                            <Feather
                              name="chevron-right"
                              size={18} 
                              />
                         </View>
                        </RectButton>
                        <View style={styles.field}>
                            <View>
                                <Text style={styles.label}>Dia e mes</Text>
                                <View style={styles.column}>
                                  <SmallInput maxLength={2} />
                                  <Text style={styles.divider}>/</Text>
                                  <SmallInput maxLength={2} />

                            </View>
                        </View>
                        <View>
                         <Text style={styles.label}>Horas e minutos</Text>
                         <View style={styles.column}>
                           <SmallInput maxLength={2} />
                           <Text style={styles.divider}>:</Text>
                           <SmallInput maxLength={2} />                                                              
                         </View>
                        </View>
                       </View>
                       <View style={[styles.field, {marginBottom: 12}]}>
                           <Text style={styles.label}>Descriçao</Text>
                           <Text style={styles.caracteresLimit}>Max 100 caracteres</Text>
                       </View>
                    

                    <TextArea
                    multiline
                    maxLength={100}
                    numberOflines={5}
                    autoCorrect={false}
                    />

                    <View style={styles.footer}>
                      <Button title="Agendar" />
                    </View>
                   </View>
               </ScrollView>
            </Background>
        </KeyboardAvoidingView>
    );
}


