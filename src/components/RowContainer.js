import anneThumb from '../images/anne.jpg' //imports anne.jpg
import strangerThingsThumb from '../images/stranger-things.jpg' //imports stranger-things.jpg
import hauntingThumb from '../images/haunting.jpg' //imports haunting.jpg
import lockwoodThumb from '../images/lockwood.jpg' //imports lockwood.jpg
import loveDeathAndRobotsThumb from '../images/love-death-robots.jpg' //imports love-death-robots.jpg
import '../style/row-container.css' //imports row-container.css
import Image from 'react-bootstrap/Image' //imports Image components 


// RowContainer component 
function RowContainer(props) {
    return (
        <div className="row-title-container">
            <h4>{props.rowTitle}</h4>
            <div className="row-container">
                <Image fluid='true' src={anneThumb} className="row-container-thumb"/>
                <Image fluid='true' src={strangerThingsThumb} className="row-container-thumb"/>
                <Image fluid='true' src={hauntingThumb} className="row-container-thumb"/>
                <Image fluid='true' src={lockwoodThumb} className="row-container-thumb"/>
                <Image fluid='true' src={loveDeathAndRobotsThumb} className="row-container-thumb"/>
            </div>
        </div>
    )
}

export default RowContainer; //exports RowContainer to import 