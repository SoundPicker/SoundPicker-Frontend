import { useEffect, useState } from 'react';
import InputCategory from '../../components/testmaking/Input/InputCategory';





const InputCategoryContainer = ({inputName,inputPlaceholder,testCategory,changeCategory}) => {

    const [isCategoryVisible, setIsCategoryVisible] = useState(false);
    const [chooseCategory, setChooseCategory] = useState()

    const categoryVisibleHandler = () => {
        setIsCategoryVisible(!isCategoryVisible);
    }

    const chooseCategoryHandler = (e) => {
        const categoryValue = e.target.childNodes[0].data;
        setChooseCategory(categoryValue)
        setIsCategoryVisible(!isCategoryVisible);
        changeCategory(e.target.id)
    }
    useEffect(
     ()=>{
         if(testCategory===1){
            setChooseCategory('여자 아이돌')
         }else if(testCategory===2){
            setChooseCategory('남자 아이돌')
         }else if(testCategory===3){
            setChooseCategory('연도별')
         }else if(testCategory===4){
            setChooseCategory('힙합')
         }else if(testCategory===5){
            setChooseCategory('핍')
         }else if(testCategory===6){
            setChooseCategory('게임')
         }else if(testCategory===7){
            setChooseCategory('영화/드라마')
         }else if(testCategory===8){
            setChooseCategory('애니메이션')
         }else if(testCategory===9){
            setChooseCategory('기타')
         }
     }
    ,[])
    return (
        <InputCategory 
                isCategoryVisible={isCategoryVisible} 
                categoryVisibleHandler={categoryVisibleHandler}
                inputName={inputName}
                inputPlaceholder={inputPlaceholder}
                chooseCategoryHandler={chooseCategoryHandler}
                testCategory={testCategory}
                changeCategory={changeCategory}
                chooseCategory={chooseCategory}
        />
        )



}

export default InputCategoryContainer;