import './menu.css';

const Menu = () => {
    return (
        <div className = 'Menu'>
            <div>
                <h4>Tags</h4>
                <div className = 'Box-holder'>
                    <input type = 'checkbox' />
                    <label>Custom task</label>
                </div>
                <div className = 'Box-holder'>
                    <input type = 'checkbox' />
                    <label>Marketing and sales</label>
                </div>
                <div className = 'Box-holder'>
                    <input type = 'checkbox' />
                    <label>Integrations</label>
                </div>
                <div className = 'Box-holder'>
                    <input type = 'checkbox' />
                    <label>Optimization</label>
                </div>
                <div className = 'Box-holder'>
                    <input type = 'checkbox' />
                    <label>Deployment</label>
                </div>
                <div className = 'Box-holder'>
                    <input type = 'checkbox' />
                    <label>Testing</label>
                </div>
            </div>

            <div>
                <h4>Task price and range</h4>
                <div className = 'Box-holder'>
                    <input type = 'checkbox' />
                    <label>Less than N100</label>
                </div>
                <div className = 'Box-holder'>
                    <input type = 'checkbox' />
                    <label>N100 - N300</label>
                </div>
                <div className = 'Box-holder'>
                    <input type = 'checkbox' />
                    <label>N301 - N900</label>
                </div>
                <div className = 'Box-holder'>
                    <input type = 'checkbox' />
                    <label>Above N900</label>
                </div>
            </div>
        </div>
    )
}

export default Menu;