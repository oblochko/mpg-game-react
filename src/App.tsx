import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import {Board} from "./models/Board";
import './App.css';
import MapComponent from "./components/MapComponent";
import MyModal from "./components/UI/MyModal/MyModal";
import CellOfControl from "./components/CellOfControl";
import ListUnits from "./components/Units/ListUnits";
import {MoveBoard} from "./models/MoveBoard";
import {Game} from "./models/Game";
import {ArmyUtils} from "./utils/ArmyUtils";
import PanelComponent from "./components/PanelComponent";
import {UnitUtils} from "./utils/UnitUtils";
import SliderArmiesComponent from "./components/SliderArmies/SliderArmiesComponent";
import Fetch from "./fetch/Fetch";
import {Army} from "./models/Army";
import ArmyApi from "./api/ArmyApi";
import ArmyService from "./services/ArmyService";

function App() {
    const [board, setBoard] = useState(new Board())
    const [moveBoard, setMoveBoard] = useState(new MoveBoard())
    const [army, setArmy] = useState<null | Army>(null);
    const [modal, setModal] = useState(false);
    const game = new Game();
    let bias = 256;

    useEffect(() => {
        console.log('APP');
        init();
    }, [])

    async function init() {
        game.initGame().then(async i => {
            let armies: Army[] = await ArmyService.initArmies(game.board.cells);
            game.armies = armies;
            setBoard(game.board);
        });
    }

    function refreshMoveBoard(moveBoard: MoveBoard) {
        setMoveBoard(moveBoard.makeMoveBoard())
    }

  return (
    <div className="App">
        <PanelComponent/>

        <CellOfControl
            moveBoard={moveBoard}
            setMoveBoard={refreshMoveBoard}
            bias = {bias}
        />

        <MapComponent
            board={board}
            setBoard={setBoard}
            setArmy={setArmy}
        />

        <SliderArmiesComponent
            units={!!army? army.units : null}
            visible={!!army}
            setModal={setModal}
        />

        <MyModal visible={modal} setVisible={setModal}>
            <ListUnits units={!!army? army.units : null} isUpdate={modal}/>
        </MyModal>

    </div>
  );
}

export default App;
