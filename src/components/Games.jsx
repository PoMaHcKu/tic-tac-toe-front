import React, {useEffect, useState} from 'react'
import * as SockJS from 'sockjs-client'
import Stomp from 'stompjs'

function Games() {

    const [games, setGames] = useState([])
    const socket = new SockJS("http://localhost:8080/games")
    const client = Stomp.over(socket);

    useEffect(function () {
        client.connect({}, function () {
            client.subscribe('/app/games', function (response) {
                let body = JSON.parse(response.body);
                if (body.id) {
                    setGames([body.id]);
                }
            })
        });

    }, [])

    function getGames() {
        if (games.length < 1) {
            return <div>NO ANY GAMES</div>
        }
        return games.map(game => <div key={game.id}>{game.id}</div>)
    }


    return (
        <div>
            <div onClick={() => {
                client.send("/app/games", {}, JSON.stringify({'name': 'hell'}));
            }}>GET GAMES MANUAL</div>
            <div>

            </div>
            {getGames()}
        </div>
    )
}

export default Games