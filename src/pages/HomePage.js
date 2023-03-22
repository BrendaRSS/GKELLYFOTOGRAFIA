import { ContainerHome, Content, ContainerImageHeader, Image, Header, ContainerLinks, Link, MyLogo } from "./style"
import photo from "../assets/images/lay.jpg"
import { AiOutlineWhatsApp, AiFillInstagram } from "react-icons/ai";
import { BsFilm, BsFillEyeFill } from "react-icons/bs";

export default function HomePage() {

    const mensagemWpp = "OLá, gostaria de fazer meu orçamento!"
    const msgCodificada = encodeURIComponent(mensagemWpp);
    const linkWhatsapp = `https://wa.me/5583987449452?text=${msgCodificada}`;

    return (
        <ContainerHome>
            <Content>
                <ContainerImageHeader>
                <Image src={photo} alt="Profile" />
                <Header>
                    <span>@gkellyfotografia</span>
                    <p>Gislayne Kelly</p>
                </Header>
                </ContainerImageHeader>
                <ContainerLinks>
                <Link colorIcon={"rgb(73 152 0)"} colorHOver={"rgb(189 255 170)"}>
                    <AiOutlineWhatsApp/>
                    <a href={linkWhatsapp}><span>WhatsApp</span></a>
                    </Link>
                <Link colorIcon={"rgb(0 136 146)"} colorHOver={"rgb(169 229 243)"}>
                    <BsFilm />
                    <span>Portifolio</span>
                    </Link>
                <Link colorIcon={"rgb(55 49 54)"} colorHOver={"rgb(176 169 169 / 94%)"}>
                    <AiFillInstagram/>
                    <a href="https://www.instagram.com/gkellyfotografia/?hl=af"><span>Instagram</span></a>
                </Link>
                </ContainerLinks>
                <MyLogo><BsFillEyeFill /><span>DeveloperBrendaRSS</span></MyLogo>
            </Content>
        </ContainerHome>
    )
}