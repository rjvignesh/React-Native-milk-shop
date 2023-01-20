import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';
import { Header } from '../components';
import { COLORS } from '../constants';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Header/>
            <ScrollView style={{flex:1,borderTopLeftRadius:20,
            borderTopRightRadius:20,marginTop:-25,backgroundColor:COLORS.gray}}>
 
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})

export default Home;