import React, {FC} from 'react';
import {Unit} from "../../models/Unit";
import classes from "./Unit.module.css";

import nn from "../../assets/ava/nn.jpg";
import ListActions from "./ListActions";

interface UnitProps {
    unit: Unit;
}
const UnitComponent: FC<UnitProps> = ({unit}) => {
    return (
        <div className={classes.unit}>
            <div className={classes.unitContent}>
                <img src={nn} className={classes.img}/>
                <strong className={classes.unitName}>{unit.name}</strong>
            </div>
            <ListActions actions={unit.actions}></ListActions>
        </div>
    );
};

export default UnitComponent;