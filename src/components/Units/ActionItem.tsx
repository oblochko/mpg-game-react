import React, {FC, useEffect, useState} from 'react';
import {Unit} from "../../models/Unit";
import {Action} from "../../models/Action";
import classes from "./Action.module.css";
import nn from "../../assets/ava/nn.jpg";
import {ActionEnum} from "../../models/ActionEnum";

interface ActionProps {
    action: Action;
}
const ActionItem: FC<ActionProps> = ({action}) => {

    const [act, setAct] = useState<Action>(action);

    useEffect(() => {

    }, [])

    function getManeuversClassName() : string {
        if(action.typeActionName === ActionEnum.MANEUVERS)
            return [classes.btn, classes.active].join(' ');
        else
            return classes.btn;
    }

    function getCollisionClassName() : string {
        if(action.typeActionName === ActionEnum.COLLISION)
            return [classes.btn, classes.active].join(' ');
        else
            return classes.btn;
    }

    function getCuttingClassName() : string {
        if(action.typeActionName === ActionEnum.CUTTING)
            return [classes.btn, classes.active].join(' ');
        else
            return classes.btn;
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
            <div className={classes.actionContent}>
                <strong>{action.name}</strong>
                <div className={classes.actionDamage}>{'\u2014'} {action.damage} ед.</div>
            </div>
            <div className={classes.actionBtns}>
                <button className={getManeuversClassName()} onClick={clickManeuversBtn}>Манёвры</button>
                <button className={getCollisionClassName()} onClick={clickCollisionCBtn}>Сшибка</button>
                <button className={getCuttingClassName()} onClick={clickCuttingCBtn}>Рубка</button>
            </div>
        </div>
    );
};

export default ActionItem;