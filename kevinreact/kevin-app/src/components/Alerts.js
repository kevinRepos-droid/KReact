const FirtsAlert = ({alt,anc,backcolor,colorfont,text}) => {
    return(
        <div>
            
            <div style={{
                height: alt,
                width: anc,
                background: backcolor,
                font: colorfont,
                borderRadius: '3px'

            }}>
                {text}
            </div>
            <br />


        </div>
    )
}
export {
    FirtsAlert
}