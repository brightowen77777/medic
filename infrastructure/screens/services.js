
import { View, Text, StyleSheet, ScrollView, Platform, StatusBar, FlatList, SafeAreaView  } from "react-native";
import { Card, Title,Button } from "react-native-paper";
import { Theme } from "../components/Theme";

const services = [
    {id:'yettggdg',
    price:98000,
    by:'Apex medical Emergencies',
    category:'Ambulance',
    title:'15 mins. Helicopter Ambulance',
    imageUrl:'https://images.pexels.com/photos/2906726/pexels-photo-2906726.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:'this helicopter service is avalable for all medical emergencies within a 80km'
},
    {id:'yetggdg',
    price:48000,
    by:'Red cells BioMedicals',
    category:'Suppliment',
    title:'Blood bank (All Groups)',
    imageUrl:'https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:'Available for all blood groups. the supplies are stored at the recommended temperature'
},
    {id:'yettgdg',
    price:79000,
    by:'Bone Fix House',
    category:'Therapy',
    title:'Bone Therapy for Athletes',
    imageUrl:'https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description:'This therapy is designed for professional athletes who want to peak their performance'
},
]

export  function Services({navigation}){
    return(
            <SafeAreaView style={styles.areaView}>
                <View style={styles.container}> 
                    
                     <View style={styles.servicesList}>
                         <FlatList 
                         data={services}
                         renderItem={({item}) => {
                            return(
                                <Card style={{marginBottom:Theme.sizes[2]}}>
                            <Card.Cover source={{ uri:item.imageUrl }} />
                            <Card.Title title={item.title} subtitle={item.by}/>
                            <Card.Content>
                                <Title>Helicopter Ambulance</Title>
                                <View style={styles.priceRow}>

                                    <Text style={styles.priceRowText}>NGN{item.price}</Text>
                                    <Text style={styles.priceRowText}>{item.category}</Text>

                                </View>
                            </Card.Content>
                            <Card.Actions>
                                <Button mode='contained' 
                                color={Theme.colors.ui.nursePurple}
                                contentStyle={{paddingHorizontal:8}}>Order</Button>
                            </Card.Actions>
                        </Card> 
                            )
                         }}
                           
                         key={({item}) => Item.id}
                         showsVerticalScrollIndicator={false}
                         />

                        </View>
                    
                </View>
            </SafeAreaView>  
            )
        }

const styles = StyleSheet.create({
    areaView:{
        flex:1,
        marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : null
    },
    container:{
        flex:1,
        paddingHorizontal:Theme.sizes[3],
        paddingBottom:Theme.sizes[3],
        
    },
    priceRow:{
        flexDirection:"row",
        justifyContent:"space-between"
    },
    priceRowText:{
        color:"gray"
    }
})