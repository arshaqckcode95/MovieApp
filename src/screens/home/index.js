import React,{useState} from 'react';
import { View,Text,StyleSheet, FlatList ,Image, Dimensions, ScrollView} from 'react-native'
import customColors from '../../assets/colors';
import moviesList from '../../constants/moviesListData';

const ScreenWidth = Dimensions.get('window').width
const numcolumns = 3
const App = () => {
 const [data,setData] = useState(moviesList?.data)

 const renderItem=({item,index})=>{
      return(
           <Child item={item} index={index}/>
      )
 }

const renderItemSeperator=()=>{
     return(
          <View  style={styles.seperator}/>
     )
}
  return (
   <View style={styles.container}>
        <ScrollView>
          <FlatList
               data={data}
               style={styles.flatlistStyle}
               numColumns={numcolumns}
               renderItem={renderItem}
               ItemSeparatorComponent={renderItemSeperator}
               //     columnWrapperStyle={{marginRight:30}}
          />
         </ScrollView>
   </View>
  );
};

const Child =(props) =>{
     const {item} = props;
     console.log('DATA--=>',item)
     return(
          <View style={styles.itemContainer}>
             <Image source={{uri:item.poster}} style={styles.movieImage} resizeMode="contain" />
             <Text style={styles.title}>{item.title}</Text>
          </View>
     )
}
const styles = StyleSheet.create({
  container:{
       flex:1,
       backgroundColor:customColors.Black
  },
  flatlistStyle:{
       paddingTop:36
  },
  movieImage:{
       width:ScreenWidth/numcolumns,
       height:180
  },
  title:{
       color:customColors.White,
       paddingTop:24,
       alignSelf:"center"
  },
  itemContainer:{
       width:ScreenWidth/numcolumns,
     //   alignItems:"center",
     //   borderWidth:1,
     //   borderColor:customColors.White,
  },
  seperator:{
       paddingTop:90
  }
});

export default App;
 