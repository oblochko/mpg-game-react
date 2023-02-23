import React, {FC} from 'react';
import MyButtonMove from "./UI/button/MyButtonMove";
import classesButton from "./UI/button/ControlForMap.module.css";
import left from "../assets/button/vlevo.png";
import right from "../assets/button/vpravo.png";
import up from "../assets/button/vverkh.png";
import down from "../assets/button/vniz.png";
import {Cell} from "../models/Cell";
import {MoveBoard} from "../models/MoveBoard";
import zkh from "../assets/button/zkh.png";
import CompleteButton from "./UI/button/CompleteButton";
import classesComplete from './UI/button/CompleteButton.module.css'
import ArmyApi from "../api/ArmyApi";
import {useKeycloak} from "@react-keycloak/web";


interface CellofControlInt {
    moveBoard: MoveBoard;
    setMoveBoard: (moveBoard: MoveBoard) => void;
    bias: number;

    onComplete: () => void;
}
const CellOfControl: FC<CellofControlInt> = ({moveBoard, setMoveBoard, bias, onComplete}) => {
    const { keycloak, initialized } = useKeycloak();
    function rightHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        let frame = document.getElementById('frame');
        let map = document.getElementById('map');

        if(frame && map) {
            moveBoard.right(frame.offsetWidth, map.offsetWidth, bias);
            setMoveBoard(moveBoard);
            rollMap();
        }
    }

    function leftHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        moveBoard.left();
        setMoveBoard(moveBoard);
        rollMap();
    }

    function upHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        moveBoard.up();
        setMoveBoard(moveBoard);
        rollMap();
    }

    function downHandler(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        let frame = document.getElementById('frame');
        let map = document.getElementById('map');

        if(frame && map) {
            moveBoard.down(frame.offsetHeight, map.offsetHeight, bias);
            setMoveBoard(moveBoard);
            rollMap();
        }
    }

    async function completeStep(event: React.MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        if (keycloak.authenticated) {
            await ArmyApi.completeTheMove(keycloak.token);
            await onComplete();
        } else {
            alert('Для завершения хода необходима авторизироваться')
        }
    }

    function rollMap() {
        let frame = document.getElementById('frame');
        let map = document.getElementById('map');

        if(frame && map) {
            let widthFrame = frame.offsetWidth;
            let widthMap = map.offsetWidth;

            let width = 0;

            if(bias * moveBoard.horSlider + widthFrame < widthMap) {
                width = bias * moveBoard.horSlider;
            }
            else {
                width = widthMap - widthFrame;
            }

            let heightFrame = frame.offsetHeight;
            let heightMap = map.offsetHeight;

            let height = 0;

            if(bias * moveBoard.verSlider + heightFrame < heightMap) {
                height = bias * moveBoard.verSlider;
            }
            else {
                height = heightMap - heightFrame;
            }

            map.style.transform = 'translate(-' + width + 'px, -' + height + 'px)';
        }
    }

    return (
        <div>
            <MyButtonMove
                idButton={classesButton["btn-left"]}
                idImg={classesButton["button-img-left"]}
                urlImg={left}
                onClick={leftHandler}
            />
            <MyButtonMove
                idButton={classesButton["btn-right"]}
                idImg={classesButton["button-img-right"]}
                urlImg={right}
                onClick={rightHandler}
            />
            <MyButtonMove
                idButton={classesButton["btn-up"]}
                idImg={classesButton["button-img-up"]}
                urlImg={up}
                onClick={upHandler}
            />
            <MyButtonMove
                idButton={classesButton["btn-down"]}
                idImg={classesButton["button-img-down"]}
                urlImg={down}
                onClick={downHandler}
            />

            <CompleteButton urlImg={zkh} idButton={classesComplete["button-step"]} onClick={completeStep}/>
        </div>
    );
};

export default CellOfControl;