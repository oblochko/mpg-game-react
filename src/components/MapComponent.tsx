import React, {FC, useEffect, useRef, useState} from 'react';
import mapImg from '../assets/map/karta_aktual.png'
import {Cell} from "../models/Cell";
import {Board} from "../models/Board";
import CellComponent from "./CellComponent";
import {MoveBoard} from "../models/MoveBoard";
import {Army} from "../models/Army";

interface BoardProps {
    board: Board;
    setBoard: (board: Board) => void;
    setArmy: (army: Army | null) => void;
}

const MapComponent: FC<BoardProps> = ({board, setBoard, setArmy}) => {

    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    function click(cell: Cell) {
        if(selectedCell && (selectedCell === cell || cell.available === true) ) {
            if(cell.available)
                selectedCell.moveArmy(cell)
            board.removeAvailable();
            setSelectedCell(null);
            setArmy(null);
        }
        else {
            board.removeAvailable();
            if(cell.army) {
                board.selectСellsToMove(cell);
                setArmy(cell.army)
            }
            setSelectedCell(cell);
        }
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    useEffect(() => {
        console.log("MAP")
        updateBoard();
    }, [selectedCell])

    return (
        <div>
            <div className="frame" id="frame">
                <div className="map" id="map">
                    <img className = "map-img"  src={mapImg}/>
                    {board.cells.map(cell =>
                        <CellComponent
                            cell={cell}
                            key={cell.id}
                            select={cell.id === selectedCell?.id}
                            click={click}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default MapComponent;