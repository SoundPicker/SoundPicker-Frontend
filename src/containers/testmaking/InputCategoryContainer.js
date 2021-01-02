import { useState } from 'react';
import InputCategory from '../../components/testmaking/Input/InputCategory';





const InputCategoryContainer = ({inputName,inputPlaceholder}) => {

    const [isCategoryVisible, setIsCategoryVisible] = useState(false);
    const [chooseCategory, setChooseCategory] = useState()

    const categoryVisibleHandler = () => {
        setIsCategoryVisible(!isCategoryVisible);
    }

    const chooseCategoryHandler = (e) => {
        const categoryValue = e.target.childNodes[0].data;
        setChooseCategory(categoryValue)
        setIsCategoryVisible(!isCategoryVisible);

    }

    return (
        <InputCategory 
                isCategoryVisible={isCategoryVisible} 
                categoryVisibleHandler={categoryVisibleHandler}
                inputName={inputName}
                inputPlaceholder={inputPlaceholder}
                chooseCategoryHandler={chooseCategoryHandler}
                chooseCategory={chooseCategory}
        />
        )



}

export default InputCategoryContainer;