import React from 'react'
import { View } from 'react-native'

import Primeiro from './Componentes/primeiro'
import Padrao, { Segundo, Terceiro } from './Componentes/Mult'

export default () => (
    <View>
        <Primeiro />
        <Padrao />
        <Segundo />
        <Terceiro />
    </View>
)