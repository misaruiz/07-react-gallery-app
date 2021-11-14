import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


class Nav extends Component {

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                <a class="navbar-brand" href="/"><i class="bi bi-camera-fill"></i> React Gallery App</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor02">
                    <ul class="navbar-nav ms-auto me-3 mb-2 mb-lg-0">
                        <li className="nav-item"><NavLink className="nav-link" to="/sequoia">Sequoia</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/yosemite">Yosemite</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/yellowstone">Yellowstone</NavLink></li>
                    </ul>
                    {this.props.children}
                </div>
                </div>
            </nav>
        )};
    
}

// const Nav = (props) => (
//     <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
//     <div class="container-fluid">
//       <a class="navbar-brand" href="/">React Gallery App</a>
//       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
//         <span class="navbar-toggler-icon"></span>
//       </button>
//       <div class="collapse navbar-collapse" id="navbarColor02">
//         <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item"><NavLink className="nav-link" to="/sunsets">Sunsets</NavLink></li>
//             <li className="nav-item"><NavLink className="nav-link" to="/eclipses">Eclipses</NavLink></li>
//             <li className="nav-item"><NavLink className="nav-link" to="/shadows">Shadows</NavLink></li>
//         </ul>
//         {/* <form class="d-flex">
//           <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
//           <button class="btn btn-outline-light" type="submit">Search</button>
//         </form> */}
//       </div>
//     </div>
//   </nav>
// );

export default Nav;



