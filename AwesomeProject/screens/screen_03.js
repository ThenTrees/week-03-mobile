import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import AppleImage from "../assets/images/Image_101_(1).png"
import PearImage from "../assets/images/Image107(1).png"
import CoconutImage from "../assets/images/Image105(1).png"
import OrangeImage from "../assets/images/Image106(1).png"
import PeachImage from "../assets/images/Image102_(1).png"
import AvocadoImage from "../assets/images/Image103(1).png"
import increaseImage from "../assets/images/Image_175.png"
import decreaseImage from "../assets/images/Image_176.png"

const myCart = [
    {id: '1', price: "28.00", desc: "Apple Italian Piada", quantity: 2, rate: 5,image: `${AppleImage}`},
    {id: '2', price: "15.00", desc: "Pear American", quantity: 1, rate: 5,image: `${PearImage}`},
    {id: '3', price: "10.00", desc: "Coconut VietNam", quantity: 3, rate: 5,image: `${CoconutImage}`},
    {id: '4', price: "9.00", desc: "Apricot China", quantity: 1, rate: 5,image: `${PeachImage}`},
    {id: '5', price: "8.00", desc: "Orange ThaiLan", quantity: 1, rate: 5, image: `${OrangeImage}`},
    {id: '6', price: "10.00", desc: "Avacado VietNam", quantity: 1, rate: 5, image: `${AvocadoImage}`},
]

const total = ()=>{
    let sum = 0
    myCart.forEach(item => {
        sum += item.price * item.quantity
    })
    return sum+".00";
}

export default Screen_03 = () => {

    

    return(
        // Header
        <View style={styles.container}>
            <Text style={styles.title}>My Basket</Text>
            <FlatList
                data={myCart}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View style={styles.element}>
                        <View style={styles.child_1}>
                        <Image source={item.image}/>
                        </View>
                        <View style={styles.child_2}>
                            <Text style={styles.textPrice}>${item.price}</Text>
                            <Text style={styles.textDesc}>{item.desc}</Text>
                            <Text>{item.rate}</Text>
                        </View>
                        <View style={styles.child_3}>
                            <Image source={decreaseImage}/>
                            <Text style={styles.textQuantity}>{item.quantity}</Text>
                            <Image source={increaseImage}/>
                        </View>
                    </View>
                )}
            />
            <View style={styles.separator} />
            <View style={styles.footer}>
                <View style={styles.total}>
                    <Text style={{fontSize: 26, fontWeight: '700', color: 'purple'}}>Total: </Text>
                    <Text style={{fontSize: 26, fontWeight: '700', color: 'purple'}}>$ {total()}</Text>
                </View>
                <TouchableOpacity style={
                        styles.btnPayment
                    }>
                    <Text style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 18,
                        
                    }}
                    >Checkout</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        padding: 10,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#00FF00',
        marginTop: 50
    },
    element: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        borderWidth:2,
        flexDirection: 'row',
        borderStyle: 'dashed',
        borderColor: '#ccc',
        marginBottom: 10,
    },
    child_1:{
        width: 100,
        height: 100,
        justifyContent: 'center',
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    child_2:{
        flex:1,
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        justifyContent: 'space-around'
    },
    child_3:{   
        width: 100,
        height: 100,
        flexDirection:'row',
        paddingHorizontal: 10,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    textPrice:{
        color: 'green',
        fontSize: 24,
        fontWeight: "500"
    },
    textDesc:{
        fontSize: 18,
    },
    textQuantity:{
        fontSize: 24,
        color: '#000',
        fontWeight: "bold",
        marginBottom:5
    },
    separator: {
        height: 2,                // Độ dày của đường gạch ngang
        width: '100%',             // Chiều rộng của đường
        backgroundColor: '#000',   // Màu của đường gạch ngang
        marginVertical: 20
    },
    total: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }
    ,
    footer:{
        height: '15%',
    },
    btnPayment:{
        backgroundColor: '#00ff00',
        padding: 15,
        borderRadius: 50,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
})