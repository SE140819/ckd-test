
import React from 'react';

const Video = ({ title }) => {
    return (
        <>
            <div className="title-main">
                <h1 className="h1_home">
                    {title}
                </h1>
            </div>
            <video className="w-full mb-5" autoPlay loop muted>
                <source src="https://ckdvietnam.com/assets/webm/welcome.webm?v=1706522344" type="video/webm" />
            </video>
        </>
    );
}

export default Video;
