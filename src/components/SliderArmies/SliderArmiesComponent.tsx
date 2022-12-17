import React, {FC, useEffect, useState} from 'react';
import classes from "./SliderArmiesComponent.module.css";
import {Unit} from "../../models/Unit";

interface SliderArmiesProps {
    units: Unit[] | null;
    visible: boolean;
    setModal: (flag: boolean) => void;
}
const SliderArmiesComponent: FC<SliderArmiesProps> = ({units, visible, setModal}) => {

    const [selectedUnit, setSelectedUnit] = useState<Unit | null>(null);
    const [widthSlider, setWidthSlider] = useState(0)
    const [countSlider, setCountSlider] = useState(0);

    useEffect(() => {
        let _widthSlider = document.querySelector<HTMLElement>(`.${classes.unitProfile}`)!.style.width;
        setWidthSlider(350);
        if(!!units)
            setSelectedUnit(units[0]);
    }, [visible])

    const sliderPrevHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if(!!units) {
            let count = 0;
            setCountSlider(countSlider - 1);
            count = countSlider - 1;
            if(countSlider < 0) {
                setCountSlider(units.length - 1);
                count = units.length - 1;
            }

            setSelectedUnit(units[count]);
            rollSlider(count);
        }
    }

    const sliderNextHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if(!!units) {
            let count = 0;
            setCountSlider(countSlider + 1);
            count = countSlider + 1;
            if(count >= units.length) {
                setCountSlider(0);
                count = 0;
            }

            setSelectedUnit(units[count]);
            rollSlider(count);
        }
    }

    function rollSlider(count: any) {
        let slider = document.querySelector<HTMLElement>(`.${classes.sliderLineProfile}`);//.style.transform = 'translate(-' + countSlider * widthSlider + 'px)';
        slider!.style.transform = 'translate(-' + count * widthSlider + 'px)';
    }

    return (
        <div className={classes.shopScroll + (!visible ? ' ' + classes.active : '')}>
            <div className={classes.unitScroll}>
                <button className={classes.buttonScroll} onClick={sliderPrevHandler}>{'\u2770'}</button>
                <div className={classes.unitTextScroll}>{selectedUnit?.name}</div>
                <button className={classes.buttonScroll} style={{float: 'right'}} onClick={sliderNextHandler}>{'\u2771'}</button>
            </div>
            <div className={classes.unitProfile} onClick={() => setModal(true)}>
                <div className={classes.sliderLineProfile}>
                    {!!units ? units.map((unit, index) =>
                        <img src={unit.logo} style={{width: `${widthSlider}px`, height: 'auto'}}  key={index}/>
                    ) : ''
                    }
                </div>
            </div>
        </div>
    );
};

export default SliderArmiesComponent;