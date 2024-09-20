export default function CustomButton({func, data, name}) {
    function func2() {
        func(data);
    }

    return(
        <h4 onClick={func2}>{name}</h4>
    );
}