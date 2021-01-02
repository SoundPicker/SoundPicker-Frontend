import styled from 'styled-components';
import {ReactComponent as BtnCategory} from '../../../assets/icons/button_category.svg';

const StyledInput = styled.input`
    width:100%;
    background-color:transparent;
    outline:none;
    border:0;
    color: #fff;
    font-size: 1.6rem;
    &::placeholder{
        color: #fff;
    }
`
const StyledButtonWrap = styled.div`
    display: flex;
    align-items:center;
    justify-content:center;
    cursor: pointer;
    width: ${props=> props.DesktopSize || 0}rem;
    height: ${props=> props.DesktopSize || 0}rem;
    @media only screen and (max-width: 1024px) {
    width: ${props=> props.TabletSize || 0}rem;
    height: ${props=> props.TabletpSize || 0}rem;
  }
    @media only screen and (max-width: 768px) {
    width: ${props=> props.MobileSize || 0}rem;
    height: ${props=> props.MobileSize || 0}rem;
  }    
`
const Category = styled.div`
    width:38rem;
    height:14rem;
    background-color: rgba(255,255,255,0.6);
    position:absolute;
    top:100%;
    right:0;
    padding-top:1.5rem;
    padding-right:2.7rem;
    padding-bottom:2.9rem;
    padding-left:2.7rem;
    display:flex;
    flex-direction:column;

`
const CategoryRowWrap = styled.div`
    width:100%;
    height:100%;
    border-bottom: 1px solid black;
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
    padding-left:1.3rem;
    padding-bottom:0.9rem;
    padding-top:1.4rem;
    display:flex;
    align-items:center;
    justify-content:center;
`
const Dot = styled.div`
    width:0.4rem;
    height:0.4rem;
    background-color:black;
    border-radius:50%;
    margin-right:0.7rem;
    margin-bottom:0.3rem;
`
const CategoryItemText = styled.span`
    display:inline-block;
    width:  6rem;
    font-size: 1.2rem;
    color: #15074A;
    cursor: pointer;
`

const InputCategory = ({chooseCategory,chooseCategoryHandler,isCategoryVisible, categoryVisibleHandler, inputName,inputPlaceholder}) => {
    return(
        <>
            <div style={{width:'100%',display:"flex"}}>
                <StyledInput type='text' disabled placeholder={inputPlaceholder} maxLength='20' name={inputName} value={chooseCategory?chooseCategory:''} onChange={chooseCategoryHandler}/>
                <StyledButtonWrap DesktopSize='3.6' TabletSize='3.8' MobileSize='2.8'> <BtnCategory onClick={categoryVisibleHandler}/> </StyledButtonWrap>
            </div>
            {isCategoryVisible ? 
            <Category>
            <CategoryRowWrap>
                <CategoryItemWrap>
                    <Dot/>
                    <CategoryItemText onClick={chooseCategoryHandler} value='여자 아이돌'>
                        여자 아이돌
                    </CategoryItemText>
                </CategoryItemWrap>
                <CategoryItemWrap>
                    <Dot/>
                    <CategoryItemText onClick={chooseCategoryHandler} value='남자 아이돌'>
                        남자 아이돌
                    </CategoryItemText>
                </CategoryItemWrap>
                <CategoryItemWrap>
                    <Dot/>
                    <CategoryItemText onClick={chooseCategoryHandler} value='연도별'>
                        연도별
                    </CategoryItemText>
                </CategoryItemWrap>
            </CategoryRowWrap>
            <CategoryRowWrap>
                <CategoryItemWrap>
                    <Dot/>
                    <CategoryItemText onClick={chooseCategoryHandler} value='힙합'>
                        힙합
                    </CategoryItemText>
                </CategoryItemWrap>
                <CategoryItemWrap>
                    <Dot/>
                    <CategoryItemText onClick={chooseCategoryHandler} value='팝'>
                        팝
                    </CategoryItemText>
                </CategoryItemWrap>
                <CategoryItemWrap>
                    <Dot/>
                    <CategoryItemText onClick={chooseCategoryHandler} value='게임'>
                        게임
                    </CategoryItemText>
                </CategoryItemWrap>
            </CategoryRowWrap>
            <CategoryLastRowWrap>
                <CategoryItemWrap>
                    <Dot/>
                    <CategoryItemText onClick={chooseCategoryHandler} value='영화/드라마'>
                        영화/드라마
                    </CategoryItemText>
                </CategoryItemWrap>
                <CategoryItemWrap>
                    <Dot/>
                    <CategoryItemText onClick={chooseCategoryHandler} value='애니메이션'>
                        애니메이션
                    </CategoryItemText>
                </CategoryItemWrap>
                <CategoryItemWrap>
                    <Dot/>
                    <CategoryItemText onClick={chooseCategoryHandler} value='가타'>
                        기타
                    </CategoryItemText>
                </CategoryItemWrap>
            </CategoryLastRowWrap>
        </Category>            
            :''}

        </>
    )
}

export default InputCategory;