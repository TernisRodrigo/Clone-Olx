import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';

export function Propaganda() {    
    const propaganda = [{       
        
        id: "1",
        img_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinBH7D4nrWdt9YzdXYl_-inuU3A50kEbTOA&usqp=CAU",
        descricao: "Prancha de Surf muito nova, sem nunhum tequinho.",
        valor: "R$ 1.500,00",
        data: "09 dezembro 18:34, Cabo Frio",
    },
    {
        id: "2",
        img_url: "https://www.carrosdub.com.br/wp-content/uploads/2015/10/honda-city-aro18-rebaixado-05.jpg",
        descricao: "Honda City 09/10, completo.",
        valor: "R$ 38.900,00",
        data: "10 dezembro 09:13, Petrópolis",
    },
    {
        id: "3",
        img_url: "https://cdn.verbolia.com/api/images/H4sIAAAAAAAEAGXPPQvCMBAG4L9SMkvS72I2FYoOTirOMQ3paZqU5AoF8b+bLqJ43HIvLw!ck1y8IZz0iGPgjMGgqTMzlW6gNx9PoVVgVRY3z+qyrNdNUzRlTu+jJivSCmNuQj5+kYACQX47smMGAoLVzDps3WQ7OtpFOIoZhmnYK9A9Ep416Se7Qoc94XkRo41B5a1AdVZzrJEtSJBGoUh2wjhIqjRN!if6h+WDE3qFMlrF6w1fc7DI8QAAAA==/bicicleta-caloi-500.jpg",
        descricao: "Bicicleta Caloi so pegar e andar.",
        valor: "R$ 690,00",
        data: "10 dezembro 11:34, Centro",
    },
    {
        id: "4",
        img_url: "https://http2.mlstatic.com/D_NQ_NP_13829-MLB2945656014_072012-O.jpg",
        descricao: "TV para colecionador, funcionando.",
        valor: "1.000,00",
        data: "12 dezembro 14:55, Mosela",
    },
    {
        id: "5",
        img_url: "https://s2.glbimg.com/A9UbOT66bw7kqdr367utaTiPsGk=/620x413/smart/e.glbimg.com/og/ed/f/original/2020/12/21/5-coisas-que-vao-te-fazer-sonhar-com-esta-casa-de-praia-contemporanea-7.jpg",
        descricao: "Casa para vender rapido, oportunidade unica.",
        valor: "1.500.000,00",
        data: "14 dezembro 10:43, Itaipava",
    },
    {
        id: "6",
        img_url: "https://s2.glbimg.com/A9UbOT66bw7kqdr367utaTiPsGk=/620x413/smart/e.glbimg.com/og/ed/f/original/2020/12/21/5-coisas-que-vao-te-fazer-sonhar-com-esta-casa-de-praia-contemporanea-7.jpg",
        descricao: "Casa para vender rapido, oportunidade unica.",
        valor: "1.500.000,00",
        data: "14 dezembro 10:43, Itaipava",
    },
    {
        id: "7",
        img_url: "https://s2.glbimg.com/A9UbOT66bw7kqdr367utaTiPsGk=/620x413/smart/e.glbimg.com/og/ed/f/original/2020/12/21/5-coisas-que-vao-te-fazer-sonhar-com-esta-casa-de-praia-contemporanea-7.jpg",
        descricao: "Casa para vender rapido, oportunidade unica.",
        valor: "1.500.000,00",
        data: "14 dezembro 10:43, Itaipava",
    },
    {
        id: "8",
        img_url: "https://s2.glbimg.com/A9UbOT66bw7kqdr367utaTiPsGk=/620x413/smart/e.glbimg.com/og/ed/f/original/2020/12/21/5-coisas-que-vao-te-fazer-sonhar-com-esta-casa-de-praia-contemporanea-7.jpg",
        descricao: "Casa para vender rapido, oportunidade unica.",
        valor: "1.500.000,00",
        data: "14 dezembro 10:43, Itaipava",
    },
    {
        id: "9",
        img_url: "https://s2.glbimg.com/A9UbOT66bw7kqdr367utaTiPsGk=/620x413/smart/e.glbimg.com/og/ed/f/original/2020/12/21/5-coisas-que-vao-te-fazer-sonhar-com-esta-casa-de-praia-contemporanea-7.jpg",
        descricao: "Casa para vender rapido, oportunidade unica.",
        valor: "1.500.000,00",
        data: "14 dezembro 10:43, Itaipava",
    },
    {
        id: "10",
        img_url: "https://s2.glbimg.com/A9UbOT66bw7kqdr367utaTiPsGk=/620x413/smart/e.glbimg.com/og/ed/f/original/2020/12/21/5-coisas-que-vao-te-fazer-sonhar-com-esta-casa-de-praia-contemporanea-7.jpg",
        descricao: "Casa para vender rapido, oportunidade unica.",
        valor: "1.500.000,00",
        data: "14 dezembro 10:43, Itaipava",
    }
];
function renderPro({item}) {
    return(
        
        <View style={styles.propaganda}>
        <TouchableOpacity style={styles.caixa}>
            <Image style={styles.img} source={{uri: item.img_url}} />
            <Text style={styles.descricao}>{item.descricao}</Text>
            <Text style={styles.valor}>{item.valor}</Text>       
        </TouchableOpacity>
        </View>
       
          
        );
    }
        return(
            <View>    
                <View>
                        <Text style={{fontSize:16, marginTop:6, paddingLeft: 30, paddingTop: 15, backgroundColor:'#ffffff',}}>Selecionamos para voce!</Text>    
            <FlatList data = {propaganda} 
            renderItem = {renderPro}
            horizontal
            keyExtractor = {item => item.id} />
                    <Text style={{fontSize:16, marginLeft: 30, marginTop:15, marginBottom:15}}>Mais anúncios</Text>
                </View> 
            </View>   
        )
}
const styles=StyleSheet.create({
    propaganda: {
        height: 200,        
        backgroundColor: '#ffffff'
    },
    
    caixa: {
        
        width:130,
        height:170,
        marginTop: 15, 
        backgroundColor: '#ffffff' ,
        borderRadius: 4,
        marginLeft:10

    },
    img: {
        
        width: "100%",
        height: 110,
        borderRadius: 6,
       
        
       
    },
    descricao: {
        top: 8,
        width: 160,
        height: 17,
        flexDirection:'row',
       
        
    },
    valor: {
        marginTop: 14,        
        color: '#000000',
        fontSize:15,
        
    },
    
   

})


    