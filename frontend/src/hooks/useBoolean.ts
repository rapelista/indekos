import { useState } from "react";

export const useBoolean = (initialValue = false) => {
    const [value, setValue] = useState<boolean>(initialValue);

    const toggle = () => setValue(!value);
    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);

    return {
        value,
        toggle,
        setTrue,
        setFalse,
        setValue,
    };
};
