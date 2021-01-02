import BlankTop from "../../../components/common/BlankTop";
import TopInput from "../../../components/testmaking/Input/TopInput";
import TopInputText from "../../../components/testmaking/Input/TopInputText";
import TopInputWrap from "../../../components/testmaking/Input/TopInputWrap";
import QuestionListHeader from "../../../components/testmaking/questionlist/QuestionListHeader";
import QuestionListInner from "../../../components/testmaking/questionlist/QuestionListInner";
import QuestionListTitle from "../../../components/testmaking/questionlist/QuestionListTitle";
import TopInner from "../../../components/testmaking/TopInner";
import InputCategoryContainer from "../InputCategoryContainer";
import InputsWrap from '../../../components/testmaking/questionlist/input/InputsWrap';
import QuestionListLeftWrap from "../../../components/testmaking/questionlist/input/QustionListInputLeftWrap";
import QuestionListRightWrap from "../../../components/testmaking/questionlist/input/QustionListInputRightWrap";
import QuestionListInputWrap from "../../../components/testmaking/questionlist/input/QustionListInputWrap";
import QuestionListInputText from "../../../components/testmaking/questionlist/input/QustionListInputText";
import QuestionListInput from "../../../components/testmaking/questionlist/input/QustionListInput";
import QuestionListHintWrap from "../../../components/testmaking/questionlist/input/QustionListHintWrap";
import QuestionListYoutubeInput from "../../../components/testmaking/questionlist/input/QusitonListYoutubeInput";
import PlayerContainer from "../player/PlayerContainer";
import PlayerWrap from "../../../components/testmaking/questionlist/player/PlayerWrap";
import StartTime from "../../../components/testmaking/questionlist/player/StartTime";
import QuestionLustPlusButton from "../../../components/testmaking/questionlist/QuestionListPlusButton";
import QuestionSaveButton from "../../../components/testmaking/questionlist/QuestionListSaveButton";


const TestMakingFormContainer = () => {

    return(
        <form>
            <TopInner>
                <table></table>
                <BlankTop DesktopMargin='1.9' TabletMargin='2' MobileMargin='2.6'/>
                <TopInputWrap>
                    <TopInputText text='제목'/>
                    <TopInput inputName='testTitle' inputPlaceholder='최대 20자' inputMaxLength='20'/>
                </TopInputWrap>
                <BlankTop DesktopMargin='1.9' TabletMargin='2' MobileMargin='2.6'/>
                <TopInputWrap>
                    <TopInputText text='내용'/>
                    <TopInput inputName='testDescription' inputPlaceholder='최대 40자' inputMaxLength='40'/>
                </TopInputWrap>
                <BlankTop DesktopMargin='1.9' TabletMargin='2' MobileMargin='2.6'/>
                <TopInputWrap>
                    <TopInputText text='카테고리'/>
                    <InputCategoryContainer inputName='testDescription' inputPlaceholder='오른쪽 화살표를 눌러 카테고리를 골라주세요'/>
                </TopInputWrap>
            </TopInner>
            <BlankTop DesktopMargin='5.7' TabletMargin='5' MobileMargin ='8.4'/>
            <QuestionListTitle/>

            <QuestionListInner>

                <QuestionListHeader />
                <InputsWrap>
                    <QuestionListLeftWrap >
                        <BlankTop DesktopMargin='1.9' TabletMargin='2' MobileMargin='2.6'/>
                        <QuestionListInputWrap>
                            <QuestionListInputText text='Qustion001' />
                            <QuestionListInput inputName='qustionNumber' inputPlaceholder='정답을 적어주세요' />
                        </QuestionListInputWrap>
                        <BlankTop DesktopMargin='1.9' TabletMargin='2' MobileMargin='2.6'/>
                        <QuestionListHintWrap>
                            <QuestionListInputText text='Hint' />
                            <QuestionListInput inputName='Hint' inputPlaceholder='힌트를 자유롭게 적어주세요' />
                        </QuestionListHintWrap>
                    </QuestionListLeftWrap>

                    <QuestionListRightWrap>

                        <BlankTop DesktopMargin='1.9' TabletMargin='2' MobileMargin='2.6'/>
                        <QuestionListInputWrap>
                            <QuestionListInputText text='Youtube Link' />
                            <QuestionListYoutubeInput inputName='qustionUrl' inputPlaceholder='1초/3초간 나올 음악 주소를 넣어주세요' />
                        </QuestionListInputWrap>

                        <BlankTop DesktopMargin='1.9' TabletMargin='2' MobileMargin='1.6'/>
                        <PlayerWrap>
                            <PlayerContainer />
                            <StartTime />
                        </PlayerWrap>

                        <BlankTop DesktopMargin='1.9' TabletMargin='2' MobileMargin='1.7'/>
                        <QuestionListInputWrap>
                            <QuestionListInputText text='Youtube Link' />
                            <QuestionListYoutubeInput inputName='answerUrl' inputPlaceholder='정답 공개 후 보여줄 영상을 넣어주세요' />
                        </QuestionListInputWrap>

                    </QuestionListRightWrap>
                </InputsWrap>
                <BlankTop DesktopMargin='4.7' TabletMargin='5.2' MobileMargin='4.7'/>
                <QuestionLustPlusButton />
                <BlankTop DesktopMargin='3.6' TabletMargin='6' MobileMargin='3.5'/>
                <QuestionSaveButton />
                <BlankTop DesktopMargin='3.6' TabletMargin='6' MobileMargin='3.5'/>
                <table></table>
            </QuestionListInner>
        </form>
    )

}

export default TestMakingFormContainer;