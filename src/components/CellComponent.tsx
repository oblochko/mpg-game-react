import React, {FC} from 'react';
import {Cell} from "../models/Cell";
import classes from "./Cell.module.css"
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;

interface CellProps {
    cell: Cell;
    select: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({cell, select, click}) => {

    //let color = cell.id % 2 == 1 ? classes.red : classes.green;
    let active = select ? classes.active : ' ';
    let available = cell.available ? classes.green : ' '

    return (
        <div
            className={[classes.field, /*color,*/ active, available].join(' ')}
            style={{top: `${cell.y * 64}px`, left: `${cell.x * 64}px`}}
            onClick={e => click(cell)}
        >
            {cell.army?.logo && <img src={cell.army.logo} className={classes.army} alt=""/>}
        </div>
    );
};

export default CellComponent;