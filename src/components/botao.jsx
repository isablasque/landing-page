import Style from "./botao.module.css"

function Botao( props )
{
    return (
        <>
            <button className={Style.botao}>{props.botao}</button>
        </>
    )
}
export default Botao;