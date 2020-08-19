import { useState, useCallback } from 'react';

function reducer(state, action) {
    //CHANGE
    //RESET
}

function useInputs(initialForm) {
    const [form, setForm] = useState(initialForm);
    const onChage = useCallback(e => {
        const {name, value} = e.target;
        setForm(form => ({...form, [name]: value}));
    }, []);
    const reset = useCallback(() => setForm(initialForm), [initialForm]);

    return [form, onChage, reset];
};

export default useInputs;