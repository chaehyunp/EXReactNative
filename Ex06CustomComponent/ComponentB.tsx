import React, { Component } from "react";
import { View , Button} from "react-native";

type Props= {
    onPress: ()=>void
}

export default class ComponentB extends Component <Props> {
    render(): React.JSX.Element {
        return(
            <View style={{margin:8}}>
                <Button title='change message' onPress={this.props.onPress} color='red'></Button>
            </View>
        )
    }
}