import PropTypes from 'prop-types';


const Player = ({ 
    name = "Unknown Player",
    team = "No Team",
    nationality = "Unknown",
    jerseyNumber = 0,
    age = 0,
    imageUrl = "/api/placeholder/300/300"
}) => {
    return (
        <div className="player-card">
            <div >
                <img 
                    src={imageUrl} 
                    alt={name}
                    className="player-image"
                />
                <div className="jersey-number">#{jerseyNumber}</div>
            </div>
            <div className="player-info">
                <h3 className="player-name">{name}</h3>
                <div className="player-detail">
                    <span className="detail-label">Team:</span>
                    <span className="team-name">{team}</span>
                </div>
                <div className="player-detail">
                    <span className="detail-label">Nationality:</span>
                    <span>{nationality}</span>
                </div>
                <div className="player-detail">
                    <span className="detail-label">Age:</span>
                    <span>{age} years</span>
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    name: PropTypes.string,
    team: PropTypes.string,
    nationality: PropTypes.string,
    jerseyNumber: PropTypes.number,
    age: PropTypes.number,
    imageUrl: PropTypes.string
};

export default Player;