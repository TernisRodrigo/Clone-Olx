import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Button} from 'react-native';
import {Entypo, Ionicons, Feather, AntDesign} from '@expo/vector-icons'

export function Navigation() {
    return (
        <>
        <View style={styles.navi}>
            <TouchableOpacity style={styles.menu}>
                <Entypo name='menu' size={26} color='white' />
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.pesquisa}>
                <Ionicons name='search-sharp' size={20} color='white' />
            </TouchableOpacity>   
            <TouchableOpacity style={styles.sino}> 
                <Feather name='bell' size={20} color='white' />
            </TouchableOpacity>
            <TouchableOpacity style={styles.coracao}>
                <AntDesign name='hearto' size={20} color='white' />
            </TouchableOpacity>  
             
                
            </View>   
            
            <View style={styles.Stylebotao}>
                
                <TouchableOpacity style={styles.botao} >
                <Text style={styles.Textbotao}> DDD 24 - Ser... </Text>               
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} >
                <Text style={styles.Textbotao}> Categoria </Text>               
                </TouchableOpacity>

                <TouchableOpacity style={styles.botao} >
                <Text style={styles.Textbotao}> Filtros </Text>               
                </TouchableOpacity>
                 
                         
            </View>      
            </>
    );
}
const styles=StyleSheet.create({
    navi: {
       
        backgroundColor:'#7009d8',
        height: 60,
        flexDirection: 'row'       
                            
    },
    menu: {
        marginTop: 16,
        justifyContent: 'flex-start',
        marginLeft:10
               
    },
    pesquisa: {
        marginTop:19,
        marginRight:8,
        marginLeft: 265,
       
    },
    sino: {
        marginRight:10,
        justifyContent: 'center',
        marginLeft: 15
      
    },
    coracao: {
        marginTop:19,
        marginLeft: 15        
    
    },
    Stylebotao:{ 
        flexDirection: 'row',
        
   },
    botao: {
        backgroundColor: '#ffffff',
        borderWidth: .6,
        borderColor: '#e5e5e5',
        width: 142,
        alignItems: 'center',
        justifyContent: "center",
        height: 50,      
                        
    },
    Textbotao: {
        fontSize: 18,
        color: '#7009d8'
    },
     
    })