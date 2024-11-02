export default function CustomButton({func, data1, data2, name, desc}) {
    function func2() {
        func(data1, data2);
    }

    return(
        <h4 onClick={func2} className="grid-item ">{name} <br /> {desc}</h4>
    );
}