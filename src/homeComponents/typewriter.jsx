import React, {Component} from 'react';
import Typewriter from "typewriter-effect";
import './style.css'
class TypeWriterC extends Component {
    state = {

    }
    render() {
        return (
            <div className="type display-3">
                <span className="badge">
                <Typewriter
                    options={{
                        strings: ['Graph Algorithms', 'Sorting Algorithms',"Prime Numbers","N-Queens Problem","Binary Search","15 Puzzle"],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </span>
            </div>
        );
    }
}

export default TypeWriterC;