import React from 'react';

function CreateUser({username, email, onChange, onCreate}) {
    return (
        <div>
            <input name="username" placeholder="username" onChange={onChange} value={username}/>
            <input name="email" placeholder="email" onChange={onChange} value={email}/>
            <button onClick={onCreate}>enroll</button>
        </div>
    );
}

// export default CreateUser;
export default React.memo(CreateUser);