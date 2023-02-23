import React, {FC, ReactNode} from 'react';
import classes from './CompleteButton.module.css'

interface Props {
    children?: ReactNode;
    idButton?: string;
    urlImg: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>)=>void;
    // any props that come into the component
}
const CompleteButton: FC<Props> = ({children, idButton, urlImg, onClick}) => {
    return (
        <button className={classes.button} id={idButton} onClick={onClick}>
            <img className={classes.img} src={urlImg} />
        </button>
    );
};

export default CompleteButton;