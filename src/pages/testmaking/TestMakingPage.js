import BlankTop from "../../components/common/BlankTop";
import Header from "../../components/testmaking/Header";
import TMBackground from "../../components/testmaking/TMBackground";
import TMInner from "../../components/testmaking/TMInner";
import TestMakingFormContainer from "../../containers/testmaking/form/TestMakingFormContainer";



const TestMakingPage = ({history}) => {
    return(
        <>
            <TMBackground>
                <TMInner>
                    <table></table>
                    <BlankTop DesktopMargin='10.2' TabletMargin='14.5' MobileMargin='8.9'/>
                    <Header/>
                    <BlankTop DesktopMargin='4.8' TabletMargin='11.6' MobileMargin='5.5'/>
                    <TestMakingFormContainer history={history} />
                </TMInner>
            </TMBackground>
        </>
    ) 
}

export default TestMakingPage;