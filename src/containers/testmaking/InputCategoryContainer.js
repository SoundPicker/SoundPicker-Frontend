import { useState } from 'react';
import InputCategory from '../../components/testmaking/Input/InputCategory';





const InputCategoryContainer = ({inputName,inputPlaceholder,testCategory,changeCategory}) => {

    const [isCategoryVisible, setIsCategoryVisible] = useState(false);
    const [chooseCategory, setChooseCategory] = useState()

    const categoryVisibleHandler = () => {
        setIsCategoryVisible(!isCategoryVisible);
    }

    const chooseCategoryHandler = (e) => {
        const categoryValue = e.target.childNodes[0].data;
        console.log(e.target.id);
        setChooseCategory(categoryValue)
        setIsCategoryVisible(!isCategoryVisible);
        changeCategory(e.target.id)
    }

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