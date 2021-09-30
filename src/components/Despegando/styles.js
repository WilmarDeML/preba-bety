import styled from 'styled-components'

export const StyledDiv = styled.div`
    position: absolute;
    top: 10%;
    width: 100%;
    color: black;
    display: flex;
    background-color: #f1ffff;

    /* margin-top: .9em; */
    .divIzquierdo{
        display: flex;
        flex-direction: column;
        width: 50%;
    }

    p{
        font-size: medium;
    }
    .divTexto{
        margin-top: -3em;
        margin-left: 3.5em;
    }
    img{
        align-self: flex-end;
    }

    #divBotones{
        display: flex;
        width: 50%;
        justify-content: space-between;

        button{
            font-weight: bold;
            border-radius: .5em;
            border: .2em solid teal;
            padding: .7em 0;
            font-size: .6em;
            color: teal;
            /* margin-right: .5em; */
            width: 48%;
        }
        .boton1{
            background-color: teal;
            color: #f1ffff;
        }
    }
`