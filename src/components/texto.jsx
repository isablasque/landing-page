import Style from "./texto.module.css"

function Texto( props )
{
    return (
        <div className={Style.texto}>
            <h1>{props.titulo}</h1>
            <span>{props.resumo}</span>
        </div>
    )
}
export default Texto;