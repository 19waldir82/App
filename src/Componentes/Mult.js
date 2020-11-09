import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default () => {
    return ( 
        <Text style={Estilo.txtGrande}>Padrão</Text> 
    )
}

export const Segundo = () => {
    return(
        <Text style={Estilo.txtGrande}>Segundo</Text>
    )
}

export const Terceiro = () => {
    return(
        <Text  style={Estilo.txtGrande}>Terceiro</Text>
    )
}