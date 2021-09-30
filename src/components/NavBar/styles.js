import styled from 'styled-components'

export const StyledNavBar = styled.nav`
    position: absolute;
    width: 100%;
    top: .1em;
    height: 100%;
    background-color: antiquewhite;
`

export const StyledUl = styled.ul`
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0 .5em;
    align-items: center;
    background-color: #3BB176;
    img{
        height: 1.8em;
        width: 1.8em;
        margin: .3em .6em
    }
`

export const MyLi = styled.li`
    display: flex;
    align-items: center;
    margin-right: 1em;
    img{
        height: 1em;
        width: 1em;
        border-right: 1px solid white;
        padding: .3em .6em;        
    }
    .link{
        text-decoration: none;
        font-size: medium;
        color: white;
        font-weight: 600;
        padding-bottom: .5em;
        :hover{
            color: black
        }
    }
`
