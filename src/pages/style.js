import styled from "styled-components";

export const ContainerHome = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    padding: 20px;
    background-image: linear-gradient(45deg,  rgb(7 80 68), rgb(0 136 146), rgb(66 188 182));

    @media (max-width: 1000px){
        padding: 30px;
        /* display: flex;
        justify-content: center;
        align-items: center; */
    }
`
export const Content = styled.div`
    width: 50%;
    min-height: 95%;
    margin: 0 auto;
    background-color: rgb(27, 27, 27);
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    border-radius: 40px;
    box-sizing: border-box;
    padding: 15px;
    box-shadow: -1px -1px 20px 0px #0f0b0b;
    @media (max-width: 1000px){
        width: 95%;  
    }
`
export const ContainerImageHeader=styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
export const Image = styled.img`
    width: 120px;
    height: 120px;
    margin-top: 10px;
    border: 1px solid #ddd;
    border-radius: 50%;
    object-fit: cover;
    object-position: 90% 10%;
`
export const Header = styled.header`
    width: 100% ;
    box-sizing: border-box;
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    p{
        font-family: 'Tangerine', cursive;
        font-weight: bold;
        font-size: 25px;
        font-weight: 700;
        color: #f9f9f9;
        display: block;
        margin-top: 5px;
        margin-bottom: 18px;
    }
    span{
        font-family: 'Roboto', sans-serif;
        font-size: 25px;
        font-weight: 700;
        color: #f9f9f9;
        display: block;
    }
`
export const ContainerLinks=styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Link = styled.button`
    width: 90%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    background-color: #f0f0f0f0;
    border: none;
    border-radius: 20px;
    box-shadow: rgb(128 128 128) 1px 2px 10px 1px, black 0px 6px 15px 0px;
    cursor: pointer;
    transition: .2s;
    a{
        text-decoration: none;
    }
    span{
        display: block;
        text-align: center;
        font-size: 17px;
        color: ${(props) => props.colorIcon};
        font-weight: 700;
    }
    svg{
        font-size: 20px;
        color: ${(props) => props.colorIcon};
        margin-right: 5%;
    }
    &:hover{
        width: 95%;
        background-color: ${(props) => props.colorHOver};
    }

    @media (max-width: 1000px){
        height: 70px; 
        margin-bottom: 25px;
    }
`
export const MyLogo=styled.div`
width: 100%;
height: 30px;
margin-top: 10%;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
a{
    text-decoration: none;
}
svg{
    font-size: 18px;
    color: rgba(240, 240, 240, 0.94);
    margin-right: 1%;
}
span{
font-family: 'Fredericka the Great', cursive;
color: rgba(240, 240, 240, 0.94);
}
`