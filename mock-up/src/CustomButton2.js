export default function CustomButton({func, data1, data2, name}) {
    function func2() {
        func(data1, data2);
    }

    return(
        <h4 onClick={func2} className="grid-item ">{name}</h4>
    );
}