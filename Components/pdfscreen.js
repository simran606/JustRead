import React from 'react';
import { StyleSheet, Dimensions, View } from 'react-native';

import Pdf from 'react-native-pdf';

const PdfScreen = () => {

        const source = {uri:'http://samples.leanpub.com/thereactnativebook-sample.pdf',cache:true};

        //const source = {uri:'bundle-assets://test.pdf'};

        //const source = {uri:'file:///sdcard/test.pdf'};
        //const source = {uri:"data:application/pdf;base64,JVBERi0xLjcKJc..."};

        return(
            <View style={styles.container}>
                <Pdf
                    source={source}
                    onLoadComplete={(numberOfPages,filePath)=>{
                        console.log(`number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page,numberOfPages)=>{
                        console.log(`current page: ${page}`);
                    }}
                    onError={(error)=>{
                        console.log(error);
                    }}
                    onPressLink={(uri)=>{
                        console.log(`Link presse: ${uri}`)
                    }}
                    style={styles.pdf}/>
            </View>
        );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 25,
    },
    pdf: {
        flex:1,
        width:Dimensions.get('window').width,
        height:Dimensions.get('window').height,
    }
});

















// import React from 'react';
// import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';
// // import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// // import { faBackward, faForward, faPause, faPlayCircle } from '@fortawesome/free-solid-svg-icons';


// const PdfScreen = () => {

//       return (
//         <View style={styles.container}>
//             <Text>Pdf Screen</Text>
//         </View>
//       );
//     }

//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       alignItems: 'center',
//       justifyContent: 'center',
//     //   borderBottomColor:'#0a66ea',
//     //   borderBottomWidth: 3,
//     //   maxHeight: '8%'
//     },
//     image: {
//       width: 150, 
//       height: 200,
//     //   marginTop: -15
//     },
//     controls: {
//         flexDirection: 'row'
//     },
//     control:{
//         margin: 20,
//         width: 30,
//         height: 504
//     }
//   });

  export default PdfScreen;