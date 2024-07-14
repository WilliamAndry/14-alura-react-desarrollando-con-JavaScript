import { useState } from "react"
import "./MiOrg.css"

const MiOrg = (props) => {
    //Estado - hooks
    //useState
    //const [nombreVariable,funcionActualiza]=useState(valorInicial)
    console.log(props);
    /*     const [mostrar,actualizaMostrar]= useState(true)
    const manejarClick = () => {
        console.log("mostrar/ocultar elemento", !mostrar)
        actualizaMostrar(!mostrar)  
    } */

    return <section className="orgSection">
        <h3 className="title">Mi organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar11}/>
    </section>
}

export default MiOrg
