import React from 'react';
import Button from './Button';



function TollBar (props) {
    return (
        <div>
            <Button text="По алфавиту" update={props.onAlphabet} />
            <Button text="По возрасту" update={props.onAge} />
        </div>
        )
}

TollBar.propTypes = {
  onAlphabet: React.PropTypes.func.isRequired,
  onAge: React.PropTypes.func.isRequired
}
export default TollBar;
