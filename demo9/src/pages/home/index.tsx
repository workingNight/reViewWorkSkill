import React, { useRef } from 'react';
import BScroll from '@better-scroll/core'

import './index.less';
import { relative } from 'path';


const Home: React.FC<{}> = () => {
    const wrapperEl = useRef(null);
    let bs = new BScroll('.wrapper', {
        probeType: 3,
        click: true
    })
    const scrollFree = () => {
        bs.scrollTo(0, -60, 300, undefined,)
    }
    bs.on('scroll', () => {
        console.log('i am scroll');
    })
    return (
        <div style={{backgroundColor:'cyan'}} >
            <button onClick={scrollFree}>clickme</button>
            <div className="wrapper" ref={wrapperEl} style={{height:400,width:200,position:'relative',overflow:'hidden',backgroundColor:'red'}}>
                    <div className="content">
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>

                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div> <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>

                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div> <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>

                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>
                    <div className="box" style={{height:50,width:200,backgroundColor:'cyan',color:'white'}}>1</div>

                    </div>

            </div>
        </div>
    )
}


export default Home;