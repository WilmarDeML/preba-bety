import styled from 'styled-components'

export const StyledForm = styled.form`
  background-color: #F0F2F7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 20%;
  margin-top: 5%;
  padding: 1em 3em;
  border-radius: .5em;
  color: black;
  font-size: medium;
  font-weight: bold;
  min-width: 25%;
  position: absolute;
  /* max-height: 500px; */
  img {
    margin-top: .2em;
    height: 1.5em;
    width: 1.5em;
    margin-right: .8em;
    border-radius: 50%;
    :hover{
      background-color: #3BB176;
    }
  }
  
  span {
    display: flex;
    align-items: center;
    font-size: large;
    font-weight: normal;
    /* align-self: center; */
  }
  
  label{
    margin: .5em 0;
  }
  
  .error {
    border-color: red;
    color: red;
    font-size: x-small
  }
  .escondido{
    visibility: hidden;
    margin: 0;
    padding: 0;
  }
  .divPassword {
    display: flex;
    justify-content: space-between;
    border: solid .1em gray;
    border-radius: .5em;
    align-items: center;
    input {
      border: 0;   
    }
  }

  input, select {
    padding: .5em .8em;
    border-radius: .5em;
    border: solid .1em gray;
    font-size: medium;
  }

  .check {
    display: flex;
    align-items: center;
    margin: .9em 0;
    font-size: small;
    font-weight: normal;
  }
  
  .registrar, .ingresar {
    background-color: #3BB176;
    padding: .5em;
    border-radius: .5em;
    border: solid .1em gray;
    color: white;
    cursor: pointer;
    :hover{
      color: black;
      font-weight: bold;
    }
  }
  
  .link {
    margin-left: .5em;
    font-weight: bold;
    color: black;
    text-decoration: none;
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1{
      font-weight: normal;
      font-size: medium;
      margin-bottom: .1em;
    }

    label{
      margin-top: 0;
    }
  }

  .span1{
    margin-top: .6em;
    align-self: center;
  }
  `

export const StyledDiv = styled.div`
  display: flex;
  border-radius: .5em;
  background-color: #3BB176;
  border: none;
  font-size: large;
  .link {
    padding: 1.3em .5em;
    margin-left: .5em;
    font-style: oblique;
    font-weight: bold;
    color: black;
    text-decoration: none;
    color: white;
    :hover{
      color: black;
    }
  }
`
