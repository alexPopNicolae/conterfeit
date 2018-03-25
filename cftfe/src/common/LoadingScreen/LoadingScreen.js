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
                    <div class="circle"></div>
                </div>
            </div>
        );
    }
}
export default LoadingScreen;