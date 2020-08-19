import React, { useEffect } from 'react';

const User = React.memo(function User({ user, onRemove, onToggle }) {
    const {username, email, id, active } = user;
    // useEffect(() => {
    //     // component mount
    //     // props -> state로 설정
    //     // REST API
    //     // D3 Video.js
    //     // setInterval, setTimeout
    //     console.log('componet appear on view');
    //     // component unmount
    //     // clearInterval, clearTimeout
    //     // 라이브러리 인스턴스 제거
    //     return () => {
    //         console.log('component disappear');
    //     }
    // }, []);
    
    // // user 값이 설정되거나, 수정 될 때마다 함수를 호출함.
    // // 특정 값의 update와 관련 되어있음.
    // useEffect(() => {
    //     console.log('user값이 설정됨');
    //     console.log(user);
    //     return () => {
    //         // 이 값이 먼저 나타남.
    //         console.log('user 값이 바뀌기 전');
    //         console.log(user);
    //     }
    // }, [user]);

    // component가 rerendering되고 난 이후에 실행 됨.
    // 모든 component에서 실행 됨.
    // 부모 component가 리렌더링 되면, 자식 component도 리렌더링 됨.
    // 항목이 많아지면, 느려질 수도 있음(보통은 안그런데 그럴수도 있어)
    // 성능 최적화를 위해 고려해주자.
    // useEffect(() => {
    //     console.log(user);
    // });

    return (
        <div>
            <b style={{
                color: active ? 'green' : 'black',
                cursor: 'pointer'
            }}
            onClick={() => onToggle(id)}>
            {username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>delete</button>
        </div>
    )
});

function UserList({ users, onRemove, onToggle}) {
    return (
        <div>
            {
                users.map(user =>
                    (<User
                        user={user}
                        key={user.id}
                        onRemove={onRemove}
                        onToggle={onToggle}
                    />)
                )
            }
        </div>
    )
};

export default React.memo(UserList, (prevProps, nextProps) => nextProps.users === prevProps.users); // 둘이 같으면 리렌더 하지 않겠다.
// export default UserList;