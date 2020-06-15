// write your custom hook here to control your checkout form
import {useState} from "react";

function useForm(initialValues, cb) {
    const [values, setValues] = useState(initialValues);

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    };

    const handleSubmit = e => {
        if (e) e.preventDefault();
        cb();
    };

    return [values, setValues, handleChanges, handleSubmit];

};

export default useForm;
