import React, {useState} from "react";

function Game() {

    const [game, setGame] = useState({
        id: 1,
        field: [
            {
                state: 'empty',
                coordinates: {
                    x: 0,
                    y: 0
                }
            },
            {
                state: 'empty',
                coordinates: {
                    x: 0,
                    y: 1
                }
            },
            {
                state: 'empty',
                coordinates: {
                    x: 0,
                    y: 2
                }
            },
            {
                state: 'empty',
                coordinates: {
                    x: 1,
                    y: 0
                }
            },
            {
                state: 'empty',
                coordinates: {
                    x: 1,
                    y: 1
                }
            },
            {
                state: 'empty',
                coordinates: {
                    x: 1,
                    y: 2
                }
            },
            {
                state: 'empty',
                coordinates: {
                    x: 2,
                    y: 0
                }
            },
            {
                state: 'empty',
                coordinates: {
                    x: 2,
                    y: 1
                }
            },
            {
                state: 'empty',
                coordinates: {
                    x: 2,
                    y: 2
                }
            },

        ],
    })

    function mapGame(game) {
        game.field.sort((a, b) => {
            return (a.coordinates.x * 10 + a.coordinates.y) - (b.coordinates.x * 10 + b.coordinates.y)
        })
        return game.field.map(f => {
            return <div className="game_field"
                        key={f.coordinates.x + '' + f.coordinates.y}>
                {f.state}
            </div>
        })
    }

    return (
        <div className="game_content">
            {mapGame(game)}
        </div>
    )

}

export default Game