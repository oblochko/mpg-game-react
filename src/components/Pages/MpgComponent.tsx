import React, {useEffect, useState} from 'react';
import {Board} from "../../models/Board";
import {MoveBoard} from "../../models/MoveBoard";
import {Army} from "../../models/Army";
import {Game} from "../../models/Game";
import ArmyService from "../../services/ArmyService";
import PanelComponent from "../PanelComponent";
import CellOfControl from "../CellOfControl";
import MapComponent from "../MapComponent";
import SliderArmiesComponent from "../SliderArmies/SliderArmiesComponent";
import MyModal from "../UI/MyModal/MyModal";
import ListUnits from "../Units/ListUnits";
import {useKeycloak} from "@react-keycloak/web";

const MpgComponent = () => {
    const { keycloak, initialized } = useKeycloak();
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
            console.log(keycloak)
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
                onComplete = {init}
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
    )
};

export default MpgComponent;