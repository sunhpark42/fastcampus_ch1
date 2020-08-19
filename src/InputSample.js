import React, { useState, useRef } from "react";

function InputSample() {
    // const [text, setText] = useState('');
    const [inputs, setInputs] = useState({
        name: '',
        nickname: '',
    });
    const nameInput = useRef();
    const { name, nickname } = inputs;
    const onChange = (e) => {
        // setText(e.target.value); //event가 발생한 dom에 대한 정보를 가지고 있음.
        const { name, value } = e.target; //추출.

        setInputs({
            ...inputs,
            [name]: value,
        });
    };
    const onReset = () => {
        // setText('');
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    };
    return (
        <div>
            {/* <input onChange={onChange} value={text}/> */}
            <input name="name" placeholder="name" onChange={onChange} value={name} ref={nameInput}/>
            <input name="nickname" placeholder="nickname" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>value : </b>
                {/* {text} */}
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;