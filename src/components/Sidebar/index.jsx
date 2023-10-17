import './sidebar.css'

const Sidebar = () => {
    return (
        <div className="sideBar">
            <div className="logo"> <h4>🍺 Brewr</h4></div>
            <div className='Menu'>
                <ul>

                    <li className="Menu-item">
                        <a className="menu-link" href="/">
                            <i className="menu-icon tf-icons bx bx-home-circle"></i>
                            <div>🏠  Dashboard</div>
                        </a>
                    </li>

                    <li className="Menu-item">
                        <a className="menu-link" href="/">
                            <i className="menu-icon tf-icons bx bx-home-circle"></i>
                            <div>🔍  Search</div>
                        </a>
                    </li>

                    <li className="Menu-item">
                        <a className="menu-link" href="/">
                            <i className="menu-icon tf-icons bx bx-home-circle"></i>
                            <div>ℹ️ About</div>
                        </a>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Sidebar;