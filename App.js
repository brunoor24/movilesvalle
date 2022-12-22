import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, } from 'react-native';

import ImageViewer from './components/ImageViewer';
import Button from "./components/Button";
import {useState} from "react";

const arg1 = require("./assets/images/arg1.jpg");
const arg2 =require('./assets/images/arg2.jpg');
const arg3 = require('./assets/images/arg3.jpg');
const fr1 = require('./assets/images/fr1.jpg');
const fr2 = require('./assets/images/fr2.jpg');
const fr3 =require('./assets/images/fr3.jpg');
const cr1 = require('./assets/images/cr1.jpg');
const cr2 = require('./assets/images/cr2.jpg');
const cr3 = require('./assets/images/cr3.jpg');



const arIMAGE = [arg1, arg2, arg3,]
const frIMAGE = [fr1, fr2, fr3,]
const crIMAGE = [cr1,cr2,cr3,]

export default function App() {
    const [country, setCountry] = useState('ar');
   
    

    return (
      <View style={styles.container}>
          <Country country={country} />
        <View style={styles.footerContainer}>
          <Button label="Argentine" onPress={()=> setCountry('ar')}/>
          <Button label="France" onPress={()=> setCountry('fr')}/>
          <Button label="Croatia" onPress={()=> setCountry('cr')}/>
        </View>
        <StatusBar style="auto" />
      </View>
  );
}



function Country({country}){
    switch (country) {
        case 'ar':
            return <ImageGallery imageArray={arIMAGE} />
        case 'fr':
            return <ImageGallery imageArray={frIMAGE} />
        case 'cr':
            return <ImageGallery imageArray={crIMAGE} />
    }
}


function ImageGallery({imageArray}) {
    return (
        <View style={styles.imageContainer}>
            {
                imageArray.map((image) =>
                <ImageViewer placeholderImageSource={image} />
                )}
        </View>
    )

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 58,
justifyContent:'space-evenly'
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
    footerContainer: {
        flex: 1 / 3,
        alignItems: 'center',
    },
});
