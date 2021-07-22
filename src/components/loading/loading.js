import './loading.css';
import { BounceLoader } from 'react-spinners';


const Loading = () => {
    return(
        <div className = 'Loading'>
            <div id = 'loading-overlay'>
                <BounceLoader size = { 50 } color = 'blue' />
            </div>
        </div>
    )
}


export default Loading;