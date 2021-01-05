import React from "react";
import styled from "styled-components";
import Button from "../../components/common/Button";



const MyPageButton = () => { 


    return(
        <div>
        <Button font='12' >수정</Button>
        <Button font='12' >삭제</Button>
        <Button font='12' color="#60FFDA" border="#60FFDA"> 플레이</Button>
        </div>

    );

};
export default MyPageButton;