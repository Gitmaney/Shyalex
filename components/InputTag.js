
import { TextInput } from "react-native";
import { Alert } from "react-native";
import { useState } from "react";

const InputTag = (props)=>{

    const hold = props.hold;
    const t = props.type;

    const [holder,changeHolder] = useState(hold);
    const [type,changeType] = useState(t);

    return(

        <TextInput
         placeholder={holder}
         keyboardType = {type}
        />
    )
}

export default InputTag;

