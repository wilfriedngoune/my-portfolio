/* eslint-disable react/prop-types */
import './SingleStack.scss';


function SingleStack({stack}) {
    let style = {
        width: `${stack.lineWidth}px`, 
        transform: `rotate(${stack.lineInclinaison}deg)`,
        marginTop: stack.lineTopOffset
    }
    return(
        <div style={{margin: stack.boxPosition}} className='single-stack-wrapper'>
            {stack.linePosition == 'left' && <div className="line line-left" style={style}></div>}
            <div className={stack.linePosition == 'left' ? 'single-stack-container animate-from-left' : 'single-stack-container animate-from-rigth'}>
                <img src={"/stacks/" + stack.logo} className='stack-img' alt="" />
                <div className="name">{stack.name}</div>
            </div>
            {stack.linePosition == 'right' && <div className="line" style={style}></div>}
        </div>
    )
}

export default SingleStack