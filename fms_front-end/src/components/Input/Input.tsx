

interface InputProps{
    value : string;
    placeholder? : string,
    type : 'text' | 'password';
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void;
}


const Input = ({value, placeholder, type} : InputProps) =>{
    return(
        <div>
            <input
            type={value}
            placeholder={placeholder}
            />
            <label></label>
        </div>
    )
}

export default Input;