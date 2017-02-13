import  React from 'react';
function Card(props) {
    return (
        <div className="bg-light-red dib pa3 ma2 tc br3 grow">
            <img role="presentation" src={`//robohash.org/set_set3/bgset_bg1/${props.id}?size=200x200`} />
            <h2>{props.name}</h2>
            <div>{props.email || ''}</div>
        </div>
    );
};

Card.propTypes = {
    id: React.PropTypes.number.isRequired,
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string
}

export default Card;