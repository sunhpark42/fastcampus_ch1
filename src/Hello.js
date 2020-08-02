import React from "react";

function Hello({color, name, isSpecial}) {
    return (
    <div style={{color}}>{isSpecial && <b>*</b>}Hello {name}!</div>
    )
}

Hello.defaultProps = {
    name: 'None'
};

//Hello라는 컴포넌트를 만들어 내보내 주겠다.
export default Hello;