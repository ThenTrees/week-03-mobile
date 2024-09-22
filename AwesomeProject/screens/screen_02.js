
import { TextInput, View, StyleSheet, TouchableOpacity, Text, FlatList, Image, SafeAreaView } from "react-native"
import AppleImage from "../assets/images/Image_101.png"
import PearImage from "../assets/images/Image107.png"
import CoconutImage from "../assets/images/Image105.png"
import OrangeImage from "../assets/images/Image106.png"
import PeachImage from "../assets/images/Image102.png"
import AvocadoImage from "../assets/images/Image103.png"
import BackImage from "../assets/images/Image_183.png"
import CartImage from "../assets/images/Image_182.png"
import SeafoodImage from "../assets/images/Image_95.png"
import DrinkImage from "../assets/images/Image_96.png"
import { useState } from "react"


export default Screen_02 = ({navigation}) => {
    const [data, setData] = useState([
        {id: 1, type: 'vegetable',name: "Apple", image: `${AppleImage}`},
        {id: 2, type: 'vegetable',name: "Pear", image: `${PearImage}`},
        {id: 3, type: 'vegetable',name: "Coconut", image: `${CoconutImage}`},
        {id: 4, type: 'vegetable',name: "Orange", image: `${OrangeImage}`},
        {id: 5, type: 'vegetable',name: "Peach", image: `${PeachImage}`},
        {id: 6, type: 'vegetable',name: "Avocado", image: `${AvocadoImage}`},
    
        {id: 7, type: 'seafood',name: "Seafood 1", image: `${SeafoodImage}`},
        {id: 8, type: 'seafood',name: "Seafood 2", image: `${SeafoodImage}`},
        {id: 9, type: 'seafood',name: "Seafood 3", image: `${SeafoodImage}`},
        {id: 10, type: 'seafood',name: "Seafood 4", image: `${SeafoodImage}`},
        {id: 11, type: 'seafood',name: "Seafood 5", image: `${SeafoodImage}`},
        {id: 12, type: 'seafood',name: "Seafood 6", image: `${SeafoodImage}`},
    
        {id: 13, type: 'drink',name: "Seafood 1", image: `${DrinkImage}`},
        {id: 14, type: 'drink',name: "Seafood 2", image: `${DrinkImage}`},
        {id: 15, type: 'drink',name: "Seafood 3", image: `${DrinkImage}`},
        {id: 16, type: 'drink',name: "Seafood 4", image: `${DrinkImage}`},
        {id: 17, type: 'drink',name: "Seafood 5", image: `${DrinkImage}`},
        {id: 18, type: 'drink',name: "Seafood 6", image: `${DrinkImage}`},
    ]);
    const [type, setType] = useState('vegetable');
    const [selectBtn, setSelectBtn] = useState('vegetable');
    return(
        <View style={styles.container}>
            <View style={styles.nav}>
                <TouchableOpacity
                onPress={()=> {
                    navigation.navigate('screen_01')
                }}>
                    <Image style={{width: 25,height:25}} source={BackImage}/>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.nav}
                onPress={()=> {
                    navigation.navigate('screen_03')
                }}>
                    <Image style={{width: 25,height:25, left: 25, bottom:32}} source={CartImage}/>
                </TouchableOpacity>
            </View>
            <TextInput 
                placeholder="Search"
                style={styles.textInput}
            >
            </TextInput>
            <View style={styles.category}>
                <TouchableOpacity 
                onPress={()=> { setType('vegetable') }}
                style={[styles.typeVeg, styles.changStatus,{ backgroundColor: type == 'vegetable' ? '#00FF00' : '#eee'}]}>
                    <Text style={[styles.textType]}>Vegetables</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=> { setType('seafood') }}
                style={[styles.typeVeg, styles.changStatus,{ backgroundColor: type == 'seafood' ? '#00FF00' : '#eee',}]}>
                    <Text style={styles.textType}>Seafoods</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={()=> { setType('drink') }}
                style={[styles.typeVeg, styles.changStatus,{ backgroundColor: type == 'drink' ? '#00FF00' : '#eee',}]}>
                    <Text style={styles.textType}>Drinks</Text>
                </TouchableOpacity>
            </View>
            {/* body */}
            <View style={styles.body}>

                <View style={styles.row}>
                   <Text style={{fontSize: 24, color: '#00FF00', fontWeight: 600}}>Order Your Favorite!</Text>
                   <Text style={{fontSize: 24, color: 'red', fontWeight: 600}}>See all</Text>
                </View>
                <FlatList
                    data={data}
                    keyExtractor={item => item.id}
                    numColumns={2}                        // Hiển thị 2 item trên một hàng
                    columnWrapperStyle={styles.rowList} 
                    renderItem={({item}) => {
                        return (
                            <View style={styles.element}>
                                <Image source={item.image}/>
                                <Text style={styles.textEle}>{item.name}</Text>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',  
        margin: 5
    },
    body: {
        flex: 1,
        backgroundColor: '#eee',  
    },
    textInput: {
        marginHorizontal: 20,
        borderWidth: 2,
        borderColor: "#000",
        height: 55,
        borderRadius: 10,
    },
    category: {
        height: 70,
        margin: 20,
        flexDirection: 'row', // Sắp xếp theo hàng ngang
        justifyContent:'space-evenly', 
        
    },
    typeVeg: {
        width:110,
        height:45,
        marginHorizontal: 20,
        marginTop: 10,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth:2,
        borderColor: '#ccc',
    },
    textType:{
        fontSize: 18,
        fontWeight: '700',
        color: 'blue',
    },
    changStatus:{
        color: '#fff',
    },
    element: {
        width:170,
        height: 300,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:15,
        marginBottom: 20
    },
    textEle: {
        fontSize: 24,
        fontWeight: '600',
    },
    row: {
        flexDirection: 'row',
        justifyContent:'space-between',
        marginHorizontal: 20,
        marginBottom: 20
    },
    rowList: {
        justifyContent:'space-between',
        marginHorizontal: 20,
        marginBottom: 20
    },
    nav:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginHorizontal: 20,
        marginTop: 30,
    },
})