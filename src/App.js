import React from 'react'
import { View, StyleSheet } from 'react-native'

import Primeiro from './Componentes/primeiro'
import Padrao, { Segundo, Terceiro } from './Componentes/Mult'

export default () => (
    <View style={style.App}>
        <Primeiro />
        <Padrao />
        <Segundo />
        <Terceiro />
    </View>
)

const style = StyleSheet.create({
    App:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    }
})