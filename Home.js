import React from 'react';

function Home(props) {
    return (
        <div>
            <h1> Welcome to Training - {props.name} {props.age} </h1>
            <p>{props.obj.department} - {props.obj.college}</p>
            {props.Arr.map((data)=>{return(<p><li>{data}</li></p>)})}
            {props.jsx}
        </div>
    );
}

export default Home;