import React, {FC, useEffect, useState} from 'react';
import {Unit} from "../../models/Unit";
import {Action} from "../../models/Action";
import classes from "./Action.module.css";
import {ActionEnum} from "../../models/ActionEnum";
import collision from "../../assets/action/collision2.png";
import cutting from "../../assets/action/cutting2.png";
import maneuvers from "../../assets/action/maneuvers2.png"

interface ActionProps {
    action: Action;
}
const ActionItem: FC<ActionProps> = ({action}) => {

    const [act, setAct] = useState<Action>(action);

    useEffect(() => {

    }, [])

    function getManeuversClassName() : string {
        if(action.typeActionName === ActionEnum.MANEUVERS)
            return [classes.actionItem, classes.active].join(' ');
        else
            return classes.actionItem;
    }

    function getCollisionClassName() : string {
        if(action.typeActionName === ActionEnum.COLLISION)
            return [classes.actionItem, classes.active].join(' ');
        else
            return classes.actionItem;
    }

    function getCuttingClassName() : string {
        if(action.typeActionName === ActionEnum.CUTTING)
            return [classes.actionItem, classes.active].join(' ');
        else
            return classes.actionItem;
    }

    function clickManeuversBtn() {
        if(action.typeActionName === ActionEnum.MANEUVERS)
            action.typeActionName = ActionEnum.HOLD
        else
            action.typeActionName = ActionEnum.MANEUVERS;
        action.modified = true;
        setAct(new Action(action.id, action.name, action.damage, action.typeActionName));
    }

    function clickCollisionCBtn() {
        if(action.typeActionName === ActionEnum.COLLISION)
            action.typeActionName = ActionEnum.HOLD
        else
            action.typeActionName = ActionEnum.COLLISION;
        action.modified = true;
        setAct(new Action(action.id, action.name, action.damage, action.typeActionName));
    }

    function clickCuttingCBtn() {
        if(action.typeActionName === ActionEnum.CUTTING)
            action.typeActionName = ActionEnum.HOLD
        else
            action.typeActionName = ActionEnum.CUTTING;
        action.modified = true;
        setAct(new Action(action.id, action.name, action.damage, action.typeActionName));
    }

    return (
        <div className={classes.action}>
            <div className={getManeuversClassName()}>
                <img src={maneuvers}/>
                <button onClick={clickManeuversBtn}>Манёвры</button>
            </div>
            <div className={getCollisionClassName()}>
                <img src={collision}/>
                <button onClick={clickCollisionCBtn}>Натиск</button>
            </div>
            <div className={getCuttingClassName()}>
                <img src={cutting}/>
                <button onClick={clickCuttingCBtn}>Резня</button>
            </div>
        </div>
    );
};

export default ActionItem;