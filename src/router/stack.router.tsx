import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'

import { Welcome } from '../pages/Welcome';
import { UserIdentification } from '../pages/UserIdentification';
import { Confirmation } from '../pages/Confirmation';
import { PlantSelect } from '../pages/PlantSelect';

import colors from '../styles/colors';

const stackRouter = createStackNavigator();

const AppRouter : React.FC = ()=>(
    <stackRouter.Navigator
    headerMode="none"
    screenOptions={{
        cardStyle: {
            backgroundColor: colors.white
        },
    }}
    >
        <stackRouter.Screen
        name="Welcome"
        component={Welcome}
        />

        <stackRouter.Screen
        name="UserIdentification"
        component={UserIdentification}
        />

        <stackRouter.Screen
        name="Confirmation"
        component={Confirmation}
        />

        <stackRouter.Screen
        name="PlantSelect"
        component={PlantSelect}
        />

    </stackRouter.Navigator>
)

export default AppRouter;