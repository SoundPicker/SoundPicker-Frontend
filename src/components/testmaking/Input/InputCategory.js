import styled from 'styled-components';
import {ReactComponent as BtnCategory} from '../../../assets/icons/button_category.svg';
import Bg from '../../../assets/images/testmaking/category/bg_category.png';

const StyledBtnCategory = styled(BtnCategory)`
    align-self : flex-start;

`
const StyledInput = styled.input`
    width:100%;
    background-color:transparent;
    outline:none;
    border:0;
    color: #fff;
    font-size: 1.6rem;
    padding-bottom:1.5rem;
    @media only screen and (max-width: 1024px) {
        padding-bottom:1.6rem;
        font-size: 1.2rem;


  }
    @media only screen and (max-width: 768px) {
        padding-bottom:1.2rem;
        font-size: 1.2rem;

  } 
    &::placeholder{
        color: #fff;
    }
`
const StyledButtonWrap = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    margin-bottom:1.5rem;

    cursor: pointer;
    width: ${props=> props.DesktopSize || 0}rem;
    height: ${props=> props.DesktopSize || 0}rem;

    @media only screen and (max-width: 1024px) {
    width: ${props=> props.TabletSize || 0}rem;
    height: ${props=> props.TabletpSize || 0}rem;
    margin-bottom:5rem;

  }
    @media only screen and (max-width: 768px) {
    width: ${props=> props.MobileSize || 0}rem;
    height: ${props=> props.MobileSize || 0}rem;
    margin-bottom:2rem;

  }    
`
const Category = styled.div`
    width:56.7rem;
    height:13.3rem;
    background-image: url(${Bg});
    position:absolute;
    top:110%;
    right:0;
    display:flex;
    
    justify-content:space-between;

    background-repeat: no-repeat;
    background-size:cover;
    @media only screen and (max-width: 1024px) {
        width:71.5rem;


  }
    @media only screen and (max-width: 768px) {
        width:54.8rem;


  } 

`
const CategoryLeftWrap = styled.div`
    display:flex;
    flex-direction:column;
    width:42.6rem;
    height:13.3rem;

    @media only screen and (max-width: 1024px) {
        width:56.4rem;


  }
    @media only screen and (max-width: 768px) {
        width:40.7rem;


  } 

`
const CategoryRowWrap = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`
const CategoryLastRowWrap = styled.div`
    width:100%;
    height:100%;
    display:flex;
    justify-content:space-between;
    align-items:center;
`

const CategoryItemWrap = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
`

const CategoryItemText = styled.span`
    display:inline-block;
    width:  7.2rem;
    font-size: 1.4rem;
    color: #15074A;
    cursor: pointer;
    color:white;

`

const InputCategory = ({chooseCategory,chooseCategoryHandler,isCategoryVisible, categoryVisibleHandler, inputName,inputPlaceholder}) => {
    return(
        <>
            <div style={{width:'100%',display:"flex"}}>
                <StyledInput type='text' readOnly placeholder={inputPlaceholder} maxLength='20' name={inputName} value={chooseCategory?chooseCategory:''} onChange={chooseCategoryHandler} required/>
                <StyledButtonWrap DesktopSize='3.6' TabletSize='3.8' MobileSize='2.8'> <StyledBtnCategory onClick={categoryVisibleHandler}/> </StyledButtonWrap>
            </div>
            {isCategoryVisible ? 
            <Category>
                <div></div>
                <CategoryLeftWrap>
            <CategoryRowWrap>
                <CategoryItemWrap>
                    <CategoryItemText onClick={chooseCategoryHandler} id={1}>
                        여자 아이돌
                    </CategoryItemText>
                </CategoryItemWrap>
                    <CategoryItemText>
                        /
                    </CategoryItemText>
                <CategoryItemWrap>
                    <CategoryItemText onClick={chooseCategoryHandler} id={2}>
                        남자 아이돌
                    </CategoryItemText>
                </CategoryItemWrap>
                <CategoryItemText>
                        /
                </CategoryItemText>
                <CategoryItemWrap>
                    <CategoryItemText onClick={chooseCategoryHandler} id={3}>
                        연도별
                    </CategoryItemText>
                </CategoryItemWrap>
            </CategoryRowWrap>
            <CategoryRowWrap>
                <CategoryItemWrap>
                    <CategoryItemText onClick={chooseCategoryHandler} id={4}>
                        힙합
                    </CategoryItemText>
                </CategoryItemWrap>
                <CategoryItemText>
                        /
                </CategoryItemText>
                <CategoryItemWrap>
                    <CategoryItemText onClick={chooseCategoryHandler} id={5}>
                        팝
                    </CategoryItemText>
                </CategoryItemWrap>
                <CategoryItemText>
                        /
                </CategoryItemText>
                <CategoryItemWrap>
                    <CategoryItemText onClick={chooseCategoryHandler} id={6}>
                        게임
                    </CategoryItemText>
                </CategoryItemWrap>
            </CategoryRowWrap>
            <CategoryLastRowWrap>
                <CategoryItemWrap>
                    <CategoryItemText onClick={chooseCategoryHandler} id={7}>
                        영화/드라마
                    </CategoryItemText>
                </CategoryItemWrap>
                <CategoryItemText>
                        /
                </CategoryItemText>
                <CategoryItemWrap>
                    <CategoryItemText onClick={chooseCategoryHandler} id={8}>
                        애니메이션
                    </CategoryItemText>
                </CategoryItemWrap>
                <CategoryItemText>
                        /
                </CategoryItemText>
                <CategoryItemWrap>
                    <CategoryItemText onClick={chooseCategoryHandler} id={9}>
                        기타
                    </CategoryItemText>
                </CategoryItemWrap>
            </CategoryLastRowWrap>
            </CategoryLeftWrap>

        </Category>            
            :''}

        </>
    )
}

export default InputCategory;