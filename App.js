import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, FlatList, Linking } from 'react-native';
import Login from './components/Login';
import About from './components/About';
import axios from 'axios';
import { useEffect,useState } from 'react';
import ListView from './components/listView';

export default function App() {

  const [data,setData] = useState([{}]);

  useEffect(()=>{

      axios.get("https://academiacollege.edu.np/api/notices")
          .then((response)=>{
              setData(response.data);
              console.log(response.data);
          })
  },[]);

  const list = () => {
    return data.map((setData) => {
      return (
        <ScrollView key={setData.id} style={{margin: 10}}>
          <Text>id:{setData.id}</Text>
          <Text>name:{setData.name}</Text>
          <Text>attachment:{setData.attachment}</Text>
          <Text>is_academic:{setData.is_academic}</Text>
          <Text>notice_type:{setData.notice_type}</Text>
        </ScrollView>
      );
    });
  };
  return <View>{list()}</View>;
}



 /* return (
    <View>  
    <Login/>



    </View>
  );
}
*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign :'left',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
  },

  id:{
    justifyContent: "left",
    alignItems: 'left',
  }
});
