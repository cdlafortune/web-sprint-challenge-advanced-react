import {useEffect} from "react";
import {useLocalStorage} from "./useLocalStorage";

export const useLightMode = () => {
    const [lightMode, setLightMode] = useLocalStorage("lightmode");

    useEffect(() => {
        if (lightMode) {
            document.querySelector('body').classList.add('light-mode');
        } else {
            document.querySelector("body").classList.remove('light-mode');
        }
    }, [lightMode]);

    return [lightMode, setLightMode];
}
