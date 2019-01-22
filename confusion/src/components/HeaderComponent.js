import React , {Component} from 'react'
import { Navbar, NavbarBrand , Jumbotron } from 'reactstrap';


class Header extends Component
{
    render()
    {
        return(
            <React.Fragment>
             {/*will use react.Fragmentthat enables us to group together bunch of react elements together */}
            <Navbar dark >
             <div className="container">
               <NavbarBrand href="/">Restaurant Con fusion</NavbarBrand>
             </div>
            </Navbar>

            <Jumbotron>
            {/*use to display some info in my header*/}
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                    
                        <h1> Restaurant Con fusion</h1>
                        <p>We take inspiration from world"s best cuisines and create a unique fusion experience.
                        Our lipsmacking cretions will tickle your culinary senses! ;)</p>

                    </div>
                </div>
            </div>
            </Jumbotron>
    
            </React.Fragment>
        
        )
    }
}

export default Header;