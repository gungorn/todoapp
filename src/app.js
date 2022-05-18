import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


class App extends React.Component {
    constructor(props) {
        super(props);
    }

    state = { count:1 };

    componentDidMount() {
    }
    componentDidUpdate() {
    }

    albTextShow(d) {
        return (
            <View>
                <Text>{d}</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={{ width: '100%', height:'100%', borderWidth:1, borderColor:'red'}}>
                <Text style={{ color: 'red' }}> albaraka </Text>
                {this.albTextShow('atg ')}
                {this.albTextShow(this.state.count)}

            <TouchableOpacity
            style={{ paddingHorizontal: 8, paddingVertical: 4, borderWidth:1, borderColor:'red', borderRadius: 16 }}
            onPress={() => { this.setState({ count: this.state.count + 1  }) }}
            >
                <Text>Artır</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={{ paddingHorizontal: 8, paddingVertical: 4, borderWidth:1, borderColor:'red', borderRadius: 16 }}
            onPress={() => { this.setState({ count: this.state.count - 1  }) }}
            //onPress={() => { this.state.count = this.state.count - 1; }} //yanlış
            >
                <Text>azalt</Text>
            </TouchableOpacity>

            </View>
        );
    }
}

export { App };