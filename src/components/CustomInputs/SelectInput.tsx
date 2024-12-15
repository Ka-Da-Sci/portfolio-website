import {useField} from 'formik';
import { FC, ReactNode } from 'react';

interface SelectInputProps {
    label: string,
    name: string,
    placeholder?: string,
    children?: ReactNode,
}

const SelectInput: FC<SelectInputProps> = ({label, children, ...props}) => {
    
    const [field, meta] = useField(props);

    return (
        <div>
            <label htmlFor={props.name}>{label}</label>
            <select {...field} {...props} >{children}</select>
            {meta.touched && meta.error ? (<p className='error' style={{'color': 'red', 'fontSize': '0.75rem'}}>{meta.error}</p>) : null}
        </div>
    )
}

export default SelectInput;