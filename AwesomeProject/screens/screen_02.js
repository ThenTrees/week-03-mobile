
import { TextInput, View, StyleSheet, TouchableOpacity, Text, FlatList, Image, SafeAreaView } from "react-native"
import AppleImage from "../assets/images/Image_101.png"
import PearImage from "../assets/images/Image107.png"
import CoconutImage from "../assets/images/Image105.png"
import OrangeImage from "../assets/images/Image106.png"
import PeachImage from "../assets/images/Image102.png"
import AvocadoImage from "../assets/images/Image103.png"


 
const data = [
    {id: 1, name: "Apple", image: `${AppleImage}`},
    {id: 2, name: "Pear", image: `${PearImage}`},
    {id: 3, name: "Coconut", image: `${CoconutImage}`},
    {id: 4, name: "Orange", image: `${OrangeImage}`},
    {id: 5, name: "Peach", image: `${PeachImage}`},
    {id: 6, name: "Avocado", image: `${AvocadoImage}`},
]

export default Screen_02 = () => {
    return(
        <View style={styles.container}>
            <TextInput 
                placeholder="Search"
                style={styles.textInput}
            >
            </TextInput>
            <View style={styles.category}>
                <TouchableOpacity style={[styles.typeVeg, styles.changStatus]}>
                    <Text style={[styles.textType, styles.changStatus]}>Vegetables</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.typeVeg}>
                    <Text style={styles.textType}>Seafoods</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.typeVeg}>
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
    },
    body: {
        flex: 1,
        backgroundColor: '#eee',  
    },
    textInput: {
        marginTop: 50,
        marginHorizontal: 20,
        borderWidth: 1,
        borderColor: "#000",
        height: 50,
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
        color: 'lightblue',
    },
    changStatus:{
        backgroundColor: '#00FF00',
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
    }
})