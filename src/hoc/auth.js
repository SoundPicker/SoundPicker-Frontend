import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


export default function(SpecificComponent,option,adminRoute=null){

    // null => 아무나 출입이 가능한 페이지
    // true => 로그인한 유저만 출입이 가능한 페이지
    // false => 로그인한 유저는 출입 불가능한 페이지

    function AuthenticationCheck(props){

        let user = useSelector(state => state.user);
        const dispatch = useDispatch();
        if(window.localStorage.getItem('isAuth')===null){
            window.localStorage.setItem('isAuth','false');
        }
        

        useEffect(()=>{
        
            dispatch(()=>{
                if(option!==null){
                    //로그인 하지 않은 상태
                    if(window.localStorage.getItem('isAuth')==='false'&&window.location.hash==='#/register'){
                        props.history.push('/register');
                    }else if(window.localStorage.getItem('isAuth')==='false'){
                        props.history.push('/login');

                    }else{
                        //로그인 한 상태
                        if(adminRoute && window.localStorage.getItem('isAuth')==='true'){
                            props.history.push('/');
                        }else{
                            if(option===false){
                                props.history.push('/');
                            }
                        }
                    }
                }
                    
            })

        },[])
        
        return(
            <SpecificComponent {...props} user={user}/>
        )

    }

    return AuthenticationCheck;

}