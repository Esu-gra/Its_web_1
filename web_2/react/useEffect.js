import { useEffect } from "react";

const EsempioUseffect = () => {
const [count,setCount]=useState(0)

    useEffect(() => {
        console.log("sono dentro lo useEffect");
        document.title = "cambio titolo";
    }, []);

    console.log("sono fuori lo useEffect");

    return (
        <div>EsempioUseffect</div>
        
    );
};

export default EsempioUseffect;
