import Style from "./foto.module.css"

function Foto( props )
{
    return (
        <figure className={Style.foto}s style={{ width: props.tamanho, height: props.altura}}>
            <img src={props.foto} alt=""/>
        </figure>       
    )
}
export default Foto;