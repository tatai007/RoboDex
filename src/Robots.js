import  React from 'react';
import Card from'./Card';


function Robots({robots}) {
    let robotsCard = robots.map((robot)=>(<Card key={robot.id} id={robot.id} name={robot.name} email={robot.email} style={{flex: "1"}}/>));
    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
            { robotsCard }
        </div>
    );
};

Robots.propTypes = {
    robots: React.PropTypes.array.isRequired 
};
export default Robots;