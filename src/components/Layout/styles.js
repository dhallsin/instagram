import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 100vh;
font-size: 14px;
a, h5, button {
  text-decoration: none;
}

#lojas {
  display: flex;
  margin-top: 16px;
}

#logo-insta {
  height: 50px;
  width: 160px;
  margin: 32px 0;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

input {
    margin-bottom: 5px;
    background-color: #f9f9f9;
    height: 35px;
    width: 250px;
    border-radius: 3px;
    border: 1px solid #ddd;
    padding: 8px;
    font-size: 12px;
  }

  button {
    height: 35px;
    width: 250px;
    border-radius: 3px;
    border: 0px solid #ddd;
    background-color: #0095f6;
    margin: 8px 0;
    color: #fff;
    font-weight: bold;

  }
    #facebook {
      background-color: #3b5998;
    }

`;

export const CardLogin = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 400px;
width: 350px;
background-color: #fff;
margin-bottom: 16px;
border: 1px solid #ddd;

span {
  color: #999;
  font-size: 12px;
  margin-top: 4px;
}

h5 {
  font-weight: 400;
  font-size: 12px;
  color: #999;

  :hover {
    color: #000;
  }
}

`

export const CardCadastro = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 60px;
width: 350px;
background-color: #fff;
margin-bottom: 16px;
border: 1px solid #ddd;

span {
  font-weight: 500;
  margin-left: 4px;
  color: #0095f6;
}
`

export const Loja = styled.div`
height: 40px;
width: 150px;
background-color: #333;
border-radius: 3px;
margin: 8px;
  img {
    height: 40px;
    width: 150px;
  }
`


