import { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import useFetch from '../CustomHook/fetchHook';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ShopNow({navigation}) {
    const data = useFetch('https://fakestoreapi.com/products');
    const [homedata, setData] = useState(null)
    const getlocaldataFromUserDevice = async () => {
        try {
          const datalocal = await AsyncStorage.getItem("data");
          if (datalocal != null) {
            setData(JSON.parse(datalocal));
          }
        } catch (error) {
          console.log(error);
        }
      };
      
    useEffect(() => {
        getlocaldataFromUserDevice();
        
    }, []);


    const renderItem = ({ item }) => (
        <View style={styles.card}>
            <TouchableOpacity style={{alignItems: 'flex-end'}}>
                <EvilIcons name="heart" size={24} color="black" />
            </TouchableOpacity>
            <Image
                style={{ width: '100%', height: 180}}
                source={{
                    uri: item.image,
                }}
            />
            <View style={{ alignItems: 'center', justifyContent: 'flex-end'}}>
                <Text style={{ color: 'black' }} > {item.title}</Text>
                <Text style={{ color: 'red', fontWeight: 'bold' }}>{item.price}</Text>
                <TouchableOpacity style={styles.buyButton}>
                    <Text>Buy Now</Text>
                </TouchableOpacity>
            </View>
        </View>


    );
  return (
    <View style={styles.container}>
            <FlatList
                numColumns={2}
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
            <TouchableOpacity
            onPress={() => navigation.navigate('Bookmark')}
            style={{
                borderColor: 'rgba(0,0,0,0.2)',
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center',
                width: 120,
                position: 'absolute',
                bottom: 20,
                height: 70,
                backgroundColor: '#f4511e',
                borderRadius: 100,
            }}
  >
    <Text>Bookmark</Text>
  </TouchableOpacity>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFF5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    padding: 15,
    borderRadius: 24,
    backgroundColor: 'white',
    width: '45%',
    margin: 8,
    justifyContent: 'space-between',
},
buyButton: {
    justifyContent: 'flex-end', 
    backgroundColor: '#007acc', 
    borderRadius: 3,
    width: 80,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
}
});
