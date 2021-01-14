import styled from 'styled-components';




const Title = styled.h2`
    display:block;
    font-size:2.4rem;
    color: #60FFDA;
    text-align:center;
    font-weight:bold;
    animation: fadeIn .8s linear;

    @media only screen and (max-width: 1024px) {
    font-size: 3.1rem;
  }
    @media only screen and (max-width: 768px) {
        font-size:2.4rem;
    }
    @keyframes fadeIn {
  from {
    opacity:0;
    transform:translateY(50px)
  }
  to{
    opacity:1;
    transform:translateY(0px)

  }
}
`
const QustionListTitle = () => {
    return  <Title>Qusetion list</Title>
}

export default QustionListTitle;