import React , {useState} from 'react';
import { StyleSheet, View , Text , Modal , Button } from 'react-native';
export default function App() {
    const [active , setactive] = useState(false);
    return (
        <View style={styles.container}>
            <Modal
            animationType="slide"
            transparent={true}
            visible={active}
            onRequestClose={() => {
            console.warn("closed");
            }}
            >
                <View style={styles.container}>
                    <View style={styles.View}>
                        <Text style={styles.text}>GeeksforGeeks</Text>
                        <Button title="close" onPress={()=>{setactive(!active)}}/>
                    </View>
                </View>
            </Modal>
            <View style={{alignItems:'flex-start',justifyContent:'flex-start'}}>
               <Button title={"click"} onPress={()=>{setactive(!active)}}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
container: {
	flex: 1,
	backgroundColor : "black",
	alignItems: 'center',
	justifyContent: 'center',
},
View : {
	backgroundColor : "white" ,
	height : 140 ,
	width : 250,
	borderRadius : 15,
	alignItems : "center",
	justifyContent : "center",
	borderColor : "black",
	borderWidth:2,
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
