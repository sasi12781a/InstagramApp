import React from 'react';
import {Text, View,Image,Dimensions,Button,TouchableOpacity, ScrollView} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = [
  {
    user: 'James',
    url:'https://media.istockphoto.com/photos/mountain-landscape-picture-id517188688?k=20&m=517188688&s=612x612&w=0&h=i38qBm2P-6V4vZVEaMy_TaTEaoCMkYhvLCysE7yJQ5Q=',
    image:
      'https://lh5.googleusercontent.com/tXpXxsJNv69zKjoM96grFKct-AT19mSKXTwKx8BWXVebv_qCUUAD8ggG2nh5R0u89x4R1GKLGD9Yr48U8oRh93ltN5bPWfoNK-57ulMXO5p_T7HqRvSWY1MadmX-KLnvPfovfb6B',
  },
  {
    user: 'Joe',
    url:'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
    image:
      'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg',
  },
  {
    user: 'Jim',
    url:'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg/1200px-Altja_j%C3%B5gi_Lahemaal.jpg',
    image:
      'https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-07.jpg',
  },
  {
    user: 'Andy',
    url:'https://cdn.pixabay.com/photo/2015/06/19/21/24/avenue-815297_960_720.jpg',
    image: 'https://www.visionarea.es/wp-content/uploads/2019/02/descarga.jpg',
  },
];

const Activity = () => {
  return (
    <ScrollView>
      <View style={{alignItems:'flex-start',justifyContent:'flex-start',margin:10}}>
        <Text style={{fontSize:25,fontWeight:'bold',color:'#000'}}>Activity</Text>
        <View style={{marginTop:20}}>
          <Text style={{fontSize:18,fontWeight:'400',color:'#000'}}>Today</Text>
        </View>
        <View style={{marginTop:20,alignItems:'flex-start',justifyContent:'flex-start',flexDirection:'row'}}>
          <Image style={{borderRadius:100,width: windowWidth * 0.2,height: windowHeight * 0.1,borderWidth: 2,borderColor: '#d35647',margin: 8,}} source={{uri:'https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-3.jpg'}}/>
          <View style={{marginTop:30,marginLeft:5,flexDirection:'row'}}>
            <Text style={{fontSize:15,fontWeight:'600',color:'#000'}}>
              Joe
            </Text>
            <Text style={{fontSize:15,fontWeight:'300',color:'#000',marginLeft:4}}>
              started following you. 1 h
            </Text>
            <TouchableOpacity style={{backgroundColor:'grey',color:'#000',marginLeft:10,borderRadius:10,height:30,width:70,justifyContent:"center",alignItems:'center'}}>
              <Text style={{fontSize:15,fontWeight:'800'}}>
                Following
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop:20}}>
          <Text style={{fontSize:18,fontWeight:'400',color:'#000'}}>Yesterday</Text>
          {
            data.map((data,index)=>{
              return(
                <View style={{marginTop:20,alignItems:'flex-start',justifyContent:'flex-start',flexDirection:'row'}}>
                  <Image style={{borderRadius:100,width: windowWidth * 0.2,height: windowHeight * 0.1,borderWidth: 2,borderColor: '#d35647',margin: 8,}} source={{uri:data.image}}/>
                  <Text style={{fontSize:15,fontWeight:'600',color:'#000',marginTop:30}}>
                    {data.user}
                  </Text>
                  <Text style={{fontSize:15,fontWeight:'300',color:'#000',marginLeft:4,marginTop:30}}>
                    liked your photo. 1d
                  </Text>
                  <Image style={{width: windowWidth * 0.18,height: windowHeight * 0.09,borderWidth: 2,margin: 8,}} source={{uri:data.url}}/>
                </View>
              )

            })
              

            
          }
        </View>
        <View style={{marginTop:20}}>
          <Text style={{fontSize:18,fontWeight:'400',color:'#000'}}>This month</Text>
        </View>
        <View style={{marginTop:20,alignItems:'flex-start',justifyContent:'flex-start',flexDirection:'row'}}>
          <Image style={{borderRadius:100,width: windowWidth * 0.2,height: windowHeight * 0.1,borderWidth: 2,borderColor: '#d35647',margin: 8,}} source={{uri:'https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-07.jpg'}}/>
          <View style={{marginTop:30,marginLeft:5,flexDirection:'row'}}>
            <Text style={{fontSize:15,fontWeight:'600',color:'#000'}}>
              Jim
            </Text>
            <Text style={{fontSize:15,fontWeight:'300',color:'#000',marginLeft:4}}>
              started following you. 1 h
            </Text>
            <TouchableOpacity style={{backgroundColor:'grey',color:'#000',marginLeft:10,borderRadius:10,height:30,width:70,justifyContent:"center",alignItems:'center'}}>
              <Text style={{fontSize:15,fontWeight:'800'}}>
                Following
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{marginTop:20}}>
          <Text style={{fontSize:18,fontWeight:'400',color:'#000'}}>Earlier</Text>
          {
            data.map((data,index)=>{
              return(
                <View style={{marginTop:20,alignItems:'flex-start',justifyContent:'flex-start',flexDirection:'row'}}>
                  <Image style={{borderRadius:100,width: windowWidth * 0.2,height: windowHeight * 0.1,borderWidth: 2,borderColor: '#d35647',margin: 8,}} source={{uri:data.image}}/>
                  <Text style={{fontSize:15,fontWeight:'600',color:'#000',marginTop:30}}>
                    {data.user}
                  </Text>
                  <Text style={{fontSize:15,fontWeight:'300',color:'#000',marginLeft:4,marginTop:30}}>
                    liked your photo. 1d
                  </Text>
                  <TouchableOpacity style={{marginTop:30,backgroundColor:'blue',marginLeft:10,borderRadius:10,height:30,width:70,justifyContent:"center",alignItems:'center'}}>
                    <Text style={{fontSize:15,fontWeight:'800',color:'white'}}>
                      Following
                    </Text>
                  </TouchableOpacity>
                </View>
              )
            }) 
          }
        </View>
      </View>
  </ScrollView>
  );
};

export default Activity;
