import React from 'react';
import './index.less';
import Dumb from '../dumb';


const Home = () => {
    const props = {
        ary: [{name:"11"},{name:"22"}],
        name: "robot",
        like:["eat", "playgame", 13]
    }
    return (
        <div>
            Home
            <Dumb {...props}/>
        </div>
    )
}


export default Home;