import React from 'react';

import gold from '../assets/resource/gold.png'
import food from '../assets/resource/food.png'
import iron from '../assets/resource/iron.png'
import stone from '../assets/resource/stone.png'
import wood from '../assets/resource/wood.png'

import classes from "./PanelComponent.module.css";
import {useKeycloak} from "@react-keycloak/web";

const PanelComponent = () => {
    const { keycloak, initialized } = useKeycloak();

    return (
            <div className={classes.infoPanel}>
                <ul className={classes.hr}>
                    <li id={classes["info-gold"]}><img src={gold}/>5 (+4)</li>
                    <li id={classes["info-food"]}><img src={food}/>6 (+3)</li>
                    <li id={classes["info-iron"]}><img src={iron}/>2 (+2)</li>
                    <li id={classes["info-stone"]}><img src={stone}/>5 (+4)</li>
                    <li id={classes["info-wood"]}><img src={wood}/>1 (+3)</li>
                    <li> Ход: 0, 400г.до.н.э.</li>
                    <li>Уведомление</li>
                    {!keycloak.authenticated && (
                        <li onClick={() => keycloak.login()}>
                            Войти
                        </li>
                    )}
                    {!!keycloak.authenticated && (
                        <li onClick={() => {
                            keycloak.logout()
                        }
                        }>
                            Выйти ({keycloak.tokenParsed!['state-ru']})
                        </li>
                    )}
                </ul>
            </div>
    );
};

export default PanelComponent;