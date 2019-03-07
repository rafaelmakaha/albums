import React, { Component } from 'react'
import { View, Text } from 'react-native'

class AlbumList extends Component {
    constructor(props){
        super(props);
        this.state = {
            teste: "teste",
        }
    }

    componentDidMount(){
        fetch(
            'https://rallycoding.herokuapp.com/api/music_albums'
        )
        .then(response => {
            this.setState({teste: JSON.stringify(response)})
        })
        
    }

    render(){
        testeVar = this.state.teste
        return(
            <View>
                <Text>{testeVar}</Text>
            </View>

        )
    }
}

export default AlbumList;
