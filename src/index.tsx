import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.less';

const App = () => {
    return (
        <>
            <div className="box">
                <div className="box1">my-project!!!----1</div>
                <div className="box2">my-project!!!----</div>
            </div>
        </>    
    )
}
const container = document.getElementById('root')!;
const root = ReactDOM.createRoot(container);
root.render(<App/>)