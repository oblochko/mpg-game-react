import React, {FC} from 'react';
import {Unit} from "../../models/Unit";
import {Action} from "../../models/Action";
import ActionItem from "./ActionItem";
import classes from "./Action.module.css"

interface ListActionsProps {
    actions: Action[];
}
const ListActions: FC<ListActionsProps> = ({actions}) => {
    return (
        <div className={classes.root}>
            {actions.map((action, index) =>
                <ActionItem
                    action={action}
                    key={index}
                />
            )}
        </div>
    );
};

export default ListActions;