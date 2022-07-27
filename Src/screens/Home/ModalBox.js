import React , {useState} from 'react';
import { StyleSheet, View , Text , Modal , Button,TouchableOpacity,Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ModalBox() {
    const [active , setactive] = useState(false);
    return (
        <>
           <View style={styles.container}>
                <Modal
                animationType='fade'
                transparent={true}
                visible={active}
                onRequestClose={() => {
                console.warn("closed");
                }}
                >
                <TouchableOpacity onPress={() => setactive(!active)}>
                    <View style={styles.View}>
                        <View style={{flexDirection:'row'}}>
                        <Text style={styles.text}>Post</Text>
                        <Icon style={styles.icon} name="reader-outline" size={30} color="#000"/>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Text style={styles.text}>Story</Text>
                        <Icon style={styles.icon} name="add-circle-outline" size={30} color="#000"/>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Text style={styles.text}>Reel</Text>
                        <Icon style={styles.icon} name="videocam-outline" size={30} color="#000"/>
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <Text style={styles.text}>Live</Text>
                        <Icon style={styles.icon} name="wifi-outline" size={30} color="#000"/>
                        </View>
                    </View>
                </TouchableOpacity>
            
                </Modal>
            </View>
            <TouchableOpacity onPress={()=>{setactive(!active)}}>
                <Icon style={styles.icon} name="add-circle-outline" size={30} color="#000"/>
            </TouchableOpacity>
        </>
    );
}

const styles = StyleSheet.create({
container: {
	backgroundColor : "#ffff",
	alignItems:'flex-end',
	justifyContent:'flex-end',
},
icon: {
    width: 30,
    height: 30,
    marginLeft: 10,
},
View : {
    marginTop:70,
    marginLeft:260,
	backgroundColor : "white" ,
	height : windowHeight*0.3,
	width : windowWidth*0.28,
	borderRadius : 15,
	alignItems : 'center',
	justifyContent : 'center',
},
text : {
	fontSize : 20,
	color : "green",
	marginBottom:20
},
button : {
	margin : 20,
	width:200,
}
});
