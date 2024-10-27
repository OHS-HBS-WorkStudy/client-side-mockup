export default function CustomButton({func, data, name}) {
    function func2() {
        func(data);
    }

    return(
        <p onClick={func2} >{name}</p>
    );
}