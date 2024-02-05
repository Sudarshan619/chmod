import React from 'react'
import "../textbox.css"
import { useChmod } from './chmodContext';

export default function Textbox() {
    const { chmodCommand , message} = useChmod();
    return (
        <div className='container2'>
            <div className="fakeMenu">
                <div className="fakeButtons fakeClose"></div>
                <div className="fakeButtons fakeMinimize"></div>
                <div className="fakeButtons fakeZoom"></div>
            </div>
            <div className="fakeScreen">
                
                <p className="line4"><span className="cursor3"><span className='greenspan'>sudarshan@LAPTOP-JIQ20LLJ:~$</span>chmod {chmodCommand}</span><svg className="image" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"/></svg></p>
                <p className="cursor4">{message? "=>":""}{message}</p>
                
            </div>
        </div>

    )
}
