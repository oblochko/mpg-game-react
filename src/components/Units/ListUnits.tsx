import React, {FC, useEffect} from 'react';
import {Unit} from "../../models/Unit";
import UnitComponent from "./UnitComponent";
import classes from "./Unit.module.css"
import ActionService from "../../services/ActionService";
import {Action} from "../../models/Action";
import {useKeycloak} from "@react-keycloak/web";

interface ListUnitsProps {
    units: Unit[] | null;
    isUpdate: boolean;
}
const ListUnits: FC<ListUnitsProps> = ({units, isUpdate}) => {

    const { keycloak, initialized } = useKeycloak();

    useEffect(() => {
        if(isUpdate == false && !!units) {
            if (!!keycloak.authenticated) {
                let actions: Action[] = units.flatMap(unit => unit.actions).filter(action => action.modified);
                actions.forEach(action => action.modified = false);
                console.log(actions);
                ActionService.updateAll(actions, keycloak.token);
            } else {
                alert('Для обновления действий необходимо авторизироваться')
            }
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