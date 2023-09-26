import PropTypes from 'prop-types';
import { SavedData } from '../../Utility/localStorage';
import swal from 'sweetalert';
const HomeCard = ({data}) => {
    const {image, title, color ,like, dislike, dro  } = data || {}
    console.log(data);
    const handleWinClick = () => {
        swal("Chill!!", `${title} wine the match`, "success");
        SavedData(like)
    }
    const handleLostClick = () => {
        swal("Alas...", `${title} lost the match`, "error");
        SavedData(dislike)
    }
    const handleDroClick = () => {
        swal("Not ok", `${title} dro the match`, "error");
        SavedData(dro)
    }
    return (
        <div className="card card-compact border-2">
        <figure className='h-40'><img src={image} alt={`image of ${title}`} className='h-full w-fit'/></figure>
        <div className="card-body">
            <h2 className="card-title mx-auto"  style={{color: color?.text_color}}>{title}</h2>
            <div className="flex flex-wrap justify-center items-center gap-2">    
                <button 
                    onClick={handleWinClick}
                    className="btn btn-primary btn-sm border-0 text-white" 
                    style={{backgroundColor: color?.text_color}}
                >Win</button>
                <button 
                    onClick={handleDroClick}
                    className="btn btn-primary btn-sm border-0 text-white" 
                    style={{backgroundColor: color?.text_color}}
                >Dro</button>
                <button 
                    onClick={handleLostClick}
                    className="btn btn-primary btn-sm border-0 text-white" 
                    style={{backgroundColor: color?.text_color}}
                >Lost</button>
            </div>
        </div>
        </div>
    );
};

HomeCard.propTypes = {
    data: PropTypes.object,
};

export default HomeCard;