import React, { useRef, useReducer, useMemo, useCallback } from 'react';
// import Hello from './Hello';
// import Wrapper from './Wrapper';
import Counter from './Counter';
import InputSample from './InputSample';
import UserList from './UserList';
import CreateUser from './CreateUser';
import useInputs from './useInputs';

function countActiveUsers(users) {
  console.log('active..');
  return users.filter(user => user.active).length;
}

const initialState = {
  // inputs: {
  //   username: '',
  //   email: '',
  // },
  users: [
    {
      id: 1,
      username: 'sunhpark',
      email: 'sunhpark42@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'sunny',
      email: 'qkrtjsml423@naver.com',
      active: false,
    },
    {
      id: 3,
      username: 'sunhee',
      email: 'sunheepark@42seoul.kr',
      active: true,
    },
  ],
}

function reducer(state, action) {
  switch (action.type) {
    // case 'CHANGE_INPUT':
    //   return {
    //     ...state,
    //     inputs: {
    //       ...state.inputs,
    //       [action.name]: action.value
    //     }
    //   };
    case 'CREATE_USER':
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map(user =>
          user.id === action.id
            ? { ...user, active: !user.active }
            : user
        )
      };
    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.id)
      }
    default:
      throw new Error('Unhandled Action')
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextID = useRef(4);
  const { users } = state;
  // const { username, email } = state.inputs;
  const [ form, onChange, reset ] = useInputs({
    username: '',
    email: '',
  });
  const {username, email} = form;

  // const onChange = useCallback(e => {
  //   const { name, value } = e.target;
  //   dispatch({
  //     type: 'CHANGE_INPUT',
  //     name,
  //     value
  //   })
  // }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextID.current,
        username,
        email,
      }
    });
    nextID.current += 1;
    reset();
  }, [username, email, reset]);

  const onToggle = useCallback(id => {
    dispatch({
      type: 'TOGGLE_USER',
      id
    });
  }, []);

  const onRemove = useCallback(id => {
    dispatch({
      type: 'REMOVE_USER',
      id
    });
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>active user number : {count}</div>
    </>
  );
}

export default App;
