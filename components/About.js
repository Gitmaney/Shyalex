import {Text} from 'react-native';
import React from 'react';
import MyButton from './Button';
import InputTag from './InputTag';
const About = ()=>{

    const[name,setName] = React.useState('made');

    return(

        <>
         <Text>{name}</Text>
        <MyButton/>
        <InputTag hold="about us" type="default"/>
        </>
       
    )
}
export default About;