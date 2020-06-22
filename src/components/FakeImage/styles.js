import styled from 'styled-components';
import image from '../../assets/blur.jpg'


export const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
min-height: 100vh;
font-size: 14px;
`;

export const Card = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 500px;
width: 350px;
background-image: url(${image}) ;
background-repeat: no-repeat;
background-size: cover;
margin-bottom: 16px;
border: 1px solid #ddd;

#blur {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 350px;
  color: #fff;

  h2 {
    font-size: 16px;
  }
  
  span {
    font-size: 14px;
    text-align: center;
  }
}
`