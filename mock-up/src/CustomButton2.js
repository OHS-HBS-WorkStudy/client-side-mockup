export default function CustomButton({func, data1, data2, name}) {
    function func2() {
        func(data1, data2);
    }

    return(
        <h4 onClick={func2}>{name}</h4>
    );
}