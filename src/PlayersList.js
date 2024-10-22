import React from 'react';
import Player from './player';
import players from './players';


const PlayersList = () => {
    return (
        <div className="players-grid">
            <h1 className="page-title">Football Players</h1>
            <div className="container">
                <div className="players-container row justify-content-center">
                    {players.map((player, index) => (
                        <div key={player.name} className="card-wrapper col-md-6 col-lg-4 d-flex justify-content-center">
                            <Player {...player} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlayersList;