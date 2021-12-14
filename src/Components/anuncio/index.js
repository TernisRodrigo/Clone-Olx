import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

export function render({item}) {
    return(  
       
        <TouchableOpacity style={styles.caixa}>
                <Image style={styles.img} source={{uri: item.img_url}} />
            <View style={styles.direito}>                   
                <Text style={styles.descricao}>{item.descricao}</Text>               
                <Text style={styles.valor}>{item.valor}</Text>               
                <Text style={styles.data}>{item.data}</Text>                
            </View>   
        </TouchableOpacity>  
              
    );
}
const styles=StyleSheet.create({
    caixa: {
        flex: 1,
        flexDirection: "row",
        marginTop: 7, 
        backgroundColor: '#ffffff' ,
        borderRadius: 4,
        marginRight: 6,
        marginLeft: 6,
        width:'100%',
        height:'100%'        

    },
    img: {
        width: "30%",
        height: 130,
        borderRadius: 4
    },
    direito: {
        flex:1,
        marginRight: 0,
        marginLeft: 10,
        justifyContent: 'space-between'
    },
    descricao: {
        top: 8
    },
    valor: {
        top: -10,
        fontWeight: 'bold',
        color: '#000000',
        fontSize:17
    },
    data: {
        top: -8,
        color: '#a9a9a9'        

    }

})