import BlankTop from "../../components/common/BlankTop";
import QuizHeader from "../../components/common/QuizHeader";
import Header from "../../components/testmaking/Header";
import TMBackground from "../../components/testmaking/TMBackground";
import TMInner from "../../components/testmaking/TMInner";
import TestEditFormContainer from "../../containers/testedit/form/TestEditFormContainer";



const TestEditPage = ({history,match}) => {
    if (window.location.href.indexOf('#reload') === -1)
    {
      window.location.href += '#reload'
      window.location.reload(true);
  }

    return(
        <>
            <TMBackground>
                <QuizHeader />
                <TMInner>
                    <table></table>
                    <BlankTop DesktopMargin='10.2' TabletMargin='14.5' MobileMargin='8.9'/>
                    <Header/>
                    <div id='player0'></div>
                    <div id='player1'></div>
                    <div id='player2'></div>
                    <div id='player3'></div>
                    <div id='player4'></div>
                    <div id='player5'></div>
                    <div id='player6'></div>
                    <div id='player7'></div>
                    <div id='player8'></div>
                    <div id='player9'></div>
                    <BlankTop DesktopMargin='4.8' TabletMargin='11.6' MobileMargin='5.5'/>
                    <TestEditFormContainer history={history} match={match}/>
                </TMInner>
            </TMBackground>
        </>
    ) 
}

export default TestEditPage;