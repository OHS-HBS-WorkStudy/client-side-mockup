export default function CustomButton({func, data, name}) {
    function func2() {
        func(data);
    }

    return(
        <p  id="hov" onClick={func2} >{name}</p>
    );
}