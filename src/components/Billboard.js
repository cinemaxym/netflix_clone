import Card from 'react-bootstrap/Card'; // imports Cards component
import { Button } from "react-bootstrap"; //imports Button component
import '../style/billboard.css' //imports billboard.css
import playIcon from '../images/play-icon.svg' //imports play-icon.svg
import infoIcon from '../images/info-icon.svg' //imports info-icon.svg


//Billboard component 
function Billboard() {
    return (
        <div>
            <Card className="bg-dark text-white" style={{
                borderRadius: "0"
            }}>
                <Card.Img src="https://occ-0-1015-299.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABS3LfASaGunAC0w_T6UBW-CHx8ewXuzsM8drYBvmKJ8wAFxsFtTNsShUJPYM7Q_Wahs5DZf2NL2WPMazUOg6it0dtmJVt1QUNl4Y.webp?r=e71" alt="Card image" />
                <Card.ImgOverlay className='container-overlay'>
                    <Card.Img className='image-title' src="https://occ-0-1015-299.1.nflxso.net/dnm/api/v6/tx1O544a9T7n8Z_G12qaboulQQE/AAAABYKIY_DwVWamzsPuvE-CQPh1uw2sGEBYsEvRagNP3qpfLVv_j2wO27Oao5q-PygbwdJPW_8s1NQBzMBWY4GkiHgfjpxgJoY0TYdyXdfAlaXCeynr1Y8C8ImqLf7abguQCjlrDcEHNJ2dVzO-53P6V8h8qE91HB-99DjzmP2rjAXBUNYHJG79.webp?r=d16" alt="Card image" />
                    <Card.Text>
                        A crew of misfits investigates a series of supernatural crimes in Victorian London for Dr. Watson and his shadowy associate, Sherlock Holmes..
                    </Card.Text>
                    <div className='billboard-button-layer'>
                        <Button variant="light" className='play-btn' id='play-btn'> <img src={playIcon} alt="play icon"/><span>  Play</span></Button>{' '}
                        <Button variant="secondary" className='more-btn' id='more-btn'><img src={infoIcon} alt="info icon"/><span>  More info</span></Button>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default Billboard; //exports Billboard to import