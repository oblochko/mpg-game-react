import React, {FC, ReactNode} from 'react';
import classes from './ControlForMap.module.css'
import left from "../../../assets/button/vlevo.png";

interface Props {
    children?: ReactNode;
    idButton?: string;
    idImg?: string;
    urlImg: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>)=>void;
    // any props that come into the component
}
const MyButtonMove: FC<Props> = ({ children, idButton, urlImg, idImg, onClick,...props }) => {
    return (
        <button className={classes.button} id={idButton} onClick={onClick} {...props}>
            <img src={urlImg} id={idImg}/>
        </button>
    );
};

export default MyButtonMove;