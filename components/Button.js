import { Button } from "react-native";
import { Alert } from "react-native";

const MyButton = ()=>{

    return(

        <Button
        title="click me"
        onPress ={()=>{Alert.alert('you clicked me')}}       
        />
    )
}

export default MyButton;

