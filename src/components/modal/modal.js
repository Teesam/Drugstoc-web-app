import './modal.css';

const Modal = ({ onClick, children, id }) => {
    return (
        <div className = 'Modal' id = { id }>
            <div id = 'holder'>
                <i id = 'close-icon' onClick = { onClick } className = "fas fa-times"></i>
                { children }
            </div>
        </div>
    )
}

export default Modal;