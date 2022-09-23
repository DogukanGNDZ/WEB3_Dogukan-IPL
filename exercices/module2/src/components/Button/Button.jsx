const Button = ({ change, text, delta }) =>{

    const handleClick=(e) => {
        const i = parseInt(e.target.dataset.delta)
        change(i)
    }

    return <button onClick={handleClick} data-delta={delta}>{text}</button>

} 







export default Button