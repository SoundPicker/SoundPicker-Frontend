import styled from 'styled-components';


const StyledSvg = styled.svg`
    &>path:nth-last-child(-n+${props => props.FillBarNumber}){
    stroke:#60FFDA;
    }

`

const Wave = (props) => {
        const {FillColor} = props;
        const FillColorMath = Math.floor(FillColor*10);
        const FillBarNumber = Math.floor(156 * FillColor/10);
    return(
        <StyledSvg FillBarNumber={FillBarNumber} width="100%" height="27" viewBox="0 0 314 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M311 8L311 18" stroke="white"/>
            <path d="M309 10L309 16" stroke="white"/>
            <path d="M307 9L307 17" stroke="white"/>
            <path d="M305 8L305 18" stroke="white"/>
            <path d="M303 9L303 17" stroke="white"/>
            <path d="M301 5V21" stroke="white"/>
            <path d="M299 5V21" stroke="white"/>
            <path d="M297 5V21" stroke="white"/>
            <path d="M295 4L295 22" stroke="white"/>
            <path d="M293 2L293 24" stroke="white"/>
            <path d="M291 0L291 26" stroke="white"/>
            <path d="M289 2L289 24" stroke="white"/>
            <path d="M287 4L287 22" stroke="white"/>
            <path d="M285 5V21" stroke="white"/>
            <path d="M283 7L283 19" stroke="white"/>
            <path d="M281 3L281 23" stroke="white"/>
            <path d="M279 9L279 17" stroke="white"/>
            <path d="M277 7L277 19" stroke="white"/>
            <path d="M275 9L275 17" stroke="white"/>
            <path d="M273 1L273 25" stroke="white"/>
            <path d="M271 9L271 17" stroke="white"/>
            <path d="M269 8L269 18" stroke="white"/>
            <path d="M267 3L267 23" stroke="white"/>
            <path d="M265 8L265 18" stroke="white"/>
            <path d="M263 7L263 19" stroke="white"/>
            <path d="M261 10L261 16" stroke="white"/>
            <path d="M259 9L259 17" stroke="white"/>
            <path d="M257 8L257 18" stroke="white"/>
            <path d="M255 10L255 16" stroke="white"/>
            <path d="M253 11L253 15" stroke="white"/>
            <path d="M251 10L251 16" stroke="white"/>
            <path d="M249 9L249 17" stroke="white"/>
            <path d="M247 3L247 23" stroke="white"/>
            <path d="M245 6L245 20" stroke="white"/>
            <path d="M243 9L243 17" stroke="white"/>
            <path d="M241 8L241 18" stroke="white"/>
            <path d="M239 2L239 24" stroke="white"/>
            <path d="M237 3L237 23" stroke="white"/>
            <path d="M235 2L235 24" stroke="white"/>
            <path d="M233 4L233 22" stroke="white"/>
            <path d="M231 7L231 19" stroke="white"/>
            <path d="M229 5L229 21" stroke="white"/>
            <path d="M227 3L227 23" stroke="white"/>
            <path d="M225 1L225 25" stroke="white"/>
            <path d="M223 0L223 26" stroke="white"/>
            <path d="M221 4L221 22" stroke="white"/>
            <path d="M219 10L219 16" stroke="white"/>
            <path d="M217 9L217 17" stroke="white"/>
            <path d="M215 6L215 20" stroke="white"/>
            <path d="M213 7L213 19" stroke="white"/>
            <path d="M211 2L211 24" stroke="white"/>
            <path d="M209 3L209 23" stroke="white"/>
            <path d="M207 4L207 22" stroke="white"/>
            <path d="M205 7L205 19" stroke="white"/>
            <path d="M203 2L203 24" stroke="white"/>
            <path d="M201 3L201 23" stroke="white"/>
            <path d="M199 7L199 19" stroke="white"/>
            <path d="M197 3L197 23" stroke="white"/>
            <path d="M195 5V21" stroke="white"/>
            <path d="M193 6L193 20" stroke="white"/>
            <path d="M191 8L191 18" stroke="white"/>
            <path d="M189 6L189 20" stroke="white"/>
            <path d="M187 7L187 19" stroke="white"/>
            <path d="M185 9L185 17" stroke="white"/>
            <path d="M183 11L183 14" stroke="white"/>
            <path d="M181 11L181 14" stroke="white"/>
            <path d="M179 5V21" stroke="white"/>
            <path d="M177 7L177 19" stroke="white"/>
            <path d="M175 7L175 19" stroke="white"/>
            <path d="M173 6L173 20" stroke="white"/>
            <path d="M171 2L171 24" stroke="white"/>
            <path d="M169 3L169 23" stroke="white"/>
            <path d="M167 4L167 22" stroke="white"/>
            <path d="M165 9L165 17" stroke="white"/>
            <path d="M163 8L163 18" stroke="white"/>
            <path d="M161 4L161 22" stroke="white"/>
            <path d="M159 7L159 19" stroke="white"/>
            <path d="M157 7L157 19" stroke="white"/>
            <path d="M155 8L155 18" stroke="white"/>
            <path d="M153 10L153 15" stroke="white"/>
            <path d="M151 9L151 17" stroke="white"/>
            <path d="M149 8L149 18" stroke="white"/>
            <path d="M147 9L147 17" stroke="white"/>
            <path d="M145 5V21" stroke="white"/>
            <path d="M143 5V21" stroke="white"/>
            <path d="M141 5V21" stroke="white"/>
            <path d="M139 4L139 22" stroke="white"/>
            <path d="M137 2L137 24" stroke="white"/>
            <path d="M135 0L135 26" stroke="white"/>
            <path d="M133 2L133 24" stroke="white"/>
            <path d="M131 4L131 22" stroke="white"/>
            <path d="M129 5V21" stroke="white"/>
            <path d="M127 7L127 19" stroke="white"/>
            <path d="M125 3L125 23" stroke="white"/>
            <path d="M123 9L123 17" stroke="white"/>
            <path d="M121 7L121 19" stroke="white"/>
            <path d="M119 9L119 17" stroke="white"/>
            <path d="M117 1L117 25" stroke="white"/>
            <path d="M115 9L115 17" stroke="white"/>
            <path d="M113 8L113 18" stroke="white"/>
            <path d="M111 3L111 23" stroke="white"/>
            <path d="M109 8L109 18" stroke="white"/>
            <path d="M107 7L107 19" stroke="white"/>
            <path d="M105 10L105 15" stroke="white"/>
            <path d="M103 9L103 17" stroke="white"/>
            <path d="M101 8L101 17" stroke="white"/>
            <path d="M99 10L99 15" stroke="white"/>
            <path d="M97 11L97 14" stroke="white"/>
            <path d="M95 10L95 16" stroke="white"/>
            <path d="M93 9L93 17" stroke="white"/>
            <path d="M91 3L91 23" stroke="white"/>
            <path d="M89 6L89 20" stroke="white"/>
            <path d="M87 9L87 17" stroke="white"/>
            <path d="M85 8L85 18" stroke="white"/>
            <path d="M83 2L83 24" stroke="white"/>
            <path d="M81 3L81 23" stroke="white"/>
            <path d="M79 2L79 24" stroke="white"/>
            <path d="M77 4L77 22" stroke="white"/>
            <path d="M75 7L75 19" stroke="white"/>
            <path d="M73 5L73 21" stroke="white"/>
            <path d="M71 3L71 23" stroke="white"/>
            <path d="M69 1L69 25" stroke="white"/>
            <path d="M67 0L67 26" stroke="white"/>
            <path d="M65 4L65 22" stroke="white"/>
            <path d="M63 10L63 16" stroke="white"/>
            <path d="M61 9L61 17" stroke="white"/>
            <path d="M59 6L59 20" stroke="white"/>
            <path d="M57 7L57 19" stroke="white"/>
            <path d="M55 2L55 24" stroke="white"/>
            <path d="M53 3L53 23" stroke="white"/>
            <path d="M51 4L51 22" stroke="white"/>
            <path d="M49 7L49 19" stroke="white"/>
            <path d="M47 2L47 24" stroke="white"/>
            <path d="M45 3L45 23" stroke="white"/>
            <path d="M43 7L43 19" stroke="white"/>
            <path d="M41 3L41 23" stroke="white"/>
            <path d="M39 5V21" stroke="white"/>
            <path d="M37 6L37 20" stroke="white"/>
            <path d="M35 8L35 18" stroke="white"/>
            <path d="M33 6L33 20" stroke="white"/>
            <path d="M31 7L31 19" stroke="white"/>
            <path d="M29 9L29 17" stroke="white"/>
            <path d="M27 11L27 14" stroke="white"/>
            <path d="M25 11L25 14" stroke="white"/>
            <path d="M23 11V15" stroke="white"/>
            <path d="M21 8V18" stroke="white"/>
            <path d="M19 10V16" stroke="white"/>
            <path d="M17 9V17" stroke="white"/>
            <path d="M15 11V14" stroke="white"/>
            <path d="M13 8V18" stroke="white"/>
            <path d="M11 9V17" stroke="white"/>
            <path d="M9 8V18" stroke="white"/>
            <path d="M7 15V11" stroke="white"/>
            <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset={FillColorMath+"%"} style={{stopColor:"#60FFDA",stopOpacity:"1"}} />
                <stop offset={FillColorMath+"%"} style={{stopColor:"rgb(255,255,255)" ,stopOpacity:"1"}} />
                </linearGradient>
            </defs>
            <rect width="314" height="1" transform="matrix(1 0 0 -1 0 13)" fill="url(#grad1)"/>
        </StyledSvg>

    )

}

export default Wave;