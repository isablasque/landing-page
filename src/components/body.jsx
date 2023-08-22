import Style from "./body.module.css"
import Botao from "./botao"
import Foto from "./foto"
import Roupa from "./img/roupa.jpeg"
import Texto from "./texto"

function Body( props )
{
    return (
        <div className={Style.body}>
            <div className={Style.divfoto}>
                <Foto foto={Roupa} tamanho="100%" altura="555px"></Foto>
            </div>
            <div className={Style.divtexto}>
                <Texto titulo="Conheça Re-Farm" resumo="Em parceria com o Instituto Precisa Ser, 
                a segunda edição do RE-FARM é voltada para profissionais comprometidos com o futuro da  moda no Brasil, 
                com o intuito de viabilizar a expansão de iniciativas que entregam o ecossistema da moda e estão 
                alinhadas com 3 principais eixos:"></Texto>
                <div className={Style.botao}>
                    <Botao botao="criatividade >"></Botao>
                    <Botao botao="sustentavel >"></Botao>
                    <Botao botao="inovação >"></Botao>
                </div>
                <div className={Style.icons}>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-google"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
        </div>
    )
}
export default Body;