import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, StyleSheet, Image, TextInput, TouchableOpacity, Text, Platform} from "react-native";
import olx from '../../../assets/olx.png';
import {FontAwesome5, MaterialCommunityIcons, AntDesign} from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export function Login(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFF" translucent={false}/>
            <Image style={styles.logo} source={olx}/>

            <View style={styles.containerOpcao}>
                <TouchableOpacity>
                    <Text style={styles.opcaoText}>Acesse a sua conta</Text>
                </TouchableOpacity>
            </View>
            
            <TouchableOpacity style={styles.containerface}>
              <FontAwesome5 name="facebook-f" size={25} color="#ffffff"/>
              <Text style={styles.redes}>Entrar com o facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.containergoogle}>
              <AntDesign name="google" size={25} color="#ffffff"/>
              <Text style={styles.redes}>Entrar com o Google</Text>
          </TouchableOpacity>

          <View style={styles.containerDivisor}>
              <View style={styles.divisor}/>
                  <Text style={styles.opcao}>ou</Text>
              <View style={styles.divisor}/>
          </View>

            <View style={styles.containerEmail}>
            <Text style={styles.login}>E-mail</Text>
            <TextInput style={styles.input} 
            />
            </View>

            <View style={styles.containerSenha}>
            <Text style={styles.senha}>Senha</Text>
            <Text style={styles.LoginSenha}>Esqueceu sua senha?</Text>
            </View>
            <View style={styles.containerLogin}>
            <TextInput style={styles.input} ></TextInput>
           
            </View>
          
           
            <TouchableOpacity style={styles.entrar} onPress={()=> navigation.navigate("Home")}>
                <Text style={styles.entrarText}>Entrar</Text>
            </TouchableOpacity>
          
            <View style={styles.divisorfinal}/>

            <View style={styles.containerCadastro}>
            <Text style={styles.conta}>Não tem uma conta?</Text>
            <TouchableOpacity>
            <Text style={styles.cadastro}> Cadastre-se</Text>
            </TouchableOpacity>
            
             </View>
                      
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        alignItems: 'center',
        justifyContent: "center",
        width: '100%',
        height: '100%'
    },
    logo:{
        width:"50%",
        height: 100,
        marginBottom: 30,
       
    },
    input:{
        backgroundColor: "#F4F3F3",
        width: "90%",
        height: 45,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#E0E0E0",
        marginBottom:20,
        marginTop: 0,
        alignItems: "center",
        justifyContent: "center"
       
    },

    containerface:{
        backgroundColor: "#395998",
        width: "90%",
        height: 45,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: "space-evenly",
        flexDirection: "row",
        marginBottom: 6
    },
    containergoogle:{
        backgroundColor: "#4285F4",
        width: "90%",
        height: 45,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: "space-evenly",
        flexDirection: "row"
    },
    redes:{
        color: "#ffffff",
        fontWeight: "bold"
    },
    containerOpcao: {
        width: "90%",
        alignItems: "center",
        marginBottom:0,
        marginTop:0,
        paddingTop:0

    },
    opcaoText:{
        color:"#414141",
        fontWeight: "bold",
        marginBottom:2,
        marginTop:0,
        paddingTop:0,
        fontSize:17
    },
    login:{
      fontSize:17,
      marginRight:260
    },
    containerEmail:{
      marginTop: 10,
      width: "90%",
      alignItems: "center",
      justifyContent: "center"
    },
    containerLogin:{
      flexDirection: "row",
      width: "90%",
      alignItems: "center",
      justifyContent: "center"
    },
    containerSenha:{
      justifyContent: "space-around",
      flexDirection: "row",
      width: "90%"
      
    },
    senha:{
        marginTop: "1%",
        color: "#414141",
        width: 55,
        height:20,
        fontSize: 17,
      
    },
    LoginSenha:{
        marginTop: "1%",
        color: "#B886EB",
        width: 170,
        height: 20,
        fontSize: 17,
       marginLeft:20,
       marginBottom: 2
      

    },
    entrar:{
        backgroundColor: "#F78322",
        width: "90%",
        height: 45,
        borderRadius: 20,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center"
       
    },
    entrarText:{
        color: "#ffffff",
        height: 20,
        fontSize: 17,
        justifyContent: "center"
    },
    containerDivisor: {
        marginTop: "3%",
        flexDirection: "row",
        width: "90%",
        alignItems: "center",
        justifyContent: "center"
    },
    divisor:{
        width: "45%",
        height: 2,
        backgroundColor: "#EFEDED",
        borderRadius: 5
    },
    opcao:{
        marginHorizontal: "3%"
    },
    divisorfinal:{
        marginTop: "15%",
        width: "100%",
        height: 2,
        backgroundColor: "#EFEDED",
        borderRadius: 5
    },
    containerCadastro:{
        marginTop:22,
        flexDirection:"row",    
    },
    conta:{
        color: "#414141",
        fontSize: 17,
        marginTop: 25
    },
    cadastro:{
        color: "#395998",
        fontWeight: "bold",
        fontSize: 17,
        marginTop: 25
    },
    olhosenha:{
        flexDirection: "row"
    }
});