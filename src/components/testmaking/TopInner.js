import styled from 'styled-components';

const Inner = styled.div`
    width:56.7rem;
    height: 100%;
    margin: 0 auto;
    animation: fadeIn .8s linear;

    @media only screen and (max-width: 1024px) {
        width:71.5rem;
  }
    @media only screen and (max-width: 768px) {
        width:54.8rem;
  }
    @media only screen and (max-width: 548px) {
        width:100%;
        padding:0 0.5rem;
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


const TopInner = ({children}) => {
    
    return(
    <Inner>{children}</Inner>
    )

}

export default TopInner;