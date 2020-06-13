// write your custom hook here to control your checkout form
import { useLocalStorage } from "./useLocalStorage";
import React, {useState} from "react";

export const useForm = (initialValues, key) => {
  const [values, setValues] = useLocalStorage(initialValues, key);

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccessMessage(true);
  };

  const handleChanges = e => {
    console.log(e.target.name, e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const clearForm = e => {
    e.preventDefault();
    setValues(initialValues);
  };
  return [values, clearForm, handleSubmit, showSuccessMessage];
};

export default useForm;
