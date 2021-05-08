import React from 'react';
import './index.less';

type Props = {
    ary: Array<{
        name: string
      }>,   //这个是什么类型？
    name: string,
    like: Array<string | number>
}

const Dumb: React.FC<Props> = React.memo(({ary, name, like}) => {
    return (
        <div className="dumb-box">
            yoxi
           <ul>
               {
                    ary.map((item,index) => <li key={index}>{item.name}</li>)
               }
           </ul>
            <span>{name}</span>
           <ul>
               {
                    like.map((item,index) => <li key={index}>{item}</li>)
               }
           </ul> 
        </div>
    )
})


export default Dumb;