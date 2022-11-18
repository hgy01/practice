import React from 'react';

import MySubComponent from './MySubComponent';

const MyComponent2=()=>{
    return(
        <div>
            <h2>Virtual Dom</h2>
            <p>This is React Component</p>

            <MySubComponent></MySubComponent>
            <MySubComponent></MySubComponent>
            <MySubComponent></MySubComponent>
        </div>
    );
};

export default MyComponent2;