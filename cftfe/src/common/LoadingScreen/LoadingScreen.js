import React from 'react';
import './LoadingScreen.css';

class LoadingScreen extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div className="loading_background">
                <div className="loading_circle_container">
                    <div className="circle"></div>
                </div>
                <p>Loading...</p>
            </div>
        );
    }
}
export default LoadingScreen;