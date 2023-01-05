import React, {FC} from 'react';
import {Unit} from "../../models/Unit";
import classes from "./Unit.module.css";

import nn from "../../assets/ava/nn.jpg";
import ListActions from "./ListActions";
import ActionItem from "./ActionItem";

interface UnitProps {
    unit: Unit;
}
const UnitComponent: FC<UnitProps> = ({unit}) => {
    return (
        <div className={classes.unit}>
            <div className={classes.img}>
                <img src={unit.logoProfile}/>
            </div>
            <div className={classes.profile}>
                <div className={classes.profileRow} style={{fontSize: '15px', justifyContent: 'center'}}>
                    {unit.name}
                </div>
                {unit.actions.map((action) =>
                    <div className={classes.profileRow} key={action.id}>
                        {action.name} {'\u2014'} {action.damage}
                    </div>
                )}
            </div>
            <div className={classes.actions}>
            {unit.actions.map((action) =>
                <ActionItem action={action} key={action.id}/>
            )}
            </div>
        </div>
        /*<div className={classes.unit}>
            <div className={classes.unitContent}>
                <img src={nn} className={classes.img}/>
                <strong className={classes.unitName}>{unit.name}</strong>
            </div>
            <ListActions actions={unit.actions}></ListActions>
        </div>*/
    );
};

export default UnitComponent;