import React, {FC, useEffect} from 'react';
import {Unit} from "../../models/Unit";
import UnitComponent from "./UnitComponent";
import classes from "./Unit.module.css"
import ActionService from "../../services/ActionService";
import {Action} from "../../models/Action";

interface ListUnitsProps {
    units: Unit[] | null;
    isUpdate: boolean;
}
const ListUnits: FC<ListUnitsProps> = ({units, isUpdate}) => {

    useEffect(() => {
        if(isUpdate == false && !!units) {
            let actions: Action[] = units.flatMap(unit => unit.actions).filter(action => action.modified);
            actions.forEach(action => action.modified = false);
            console.log(actions);
            ActionService.updateAll(actions);
        }

    }, [isUpdate]);

    return (
        <div className={classes.root}>
            {!!units? units.map((unit, index) =>
                <UnitComponent
                    unit={unit}
                    key={index}
                />
            ): <strong>Армия не имеет юнитов</strong>}
        </div>
    );
};

export default ListUnits;