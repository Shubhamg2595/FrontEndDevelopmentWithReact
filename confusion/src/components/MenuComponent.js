import React , {Component} from 'react';
import {Media} from 'reactstrap';


class Menu extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {};
    }

    render()
    {
        const menu = this.props.dishes.map((dish)=>{
            return(
                <div key={dish.id} className="col-12 mt-5" >
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={dish.image} alt={dish.name} />
                        </Media>
                    
                        <Media body className="ml-5">
                            <Media heading>{dish.name}</Media>
                            <p>{dish.description}</p>
                        </Media>
                    
                    </Media>
                    
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row">
                    {/*
                    this menu component is going to construct a list of dishes for my restaurant.
                    */}
                    <Media list>
                        {menu}
                    </Media>


                </div>
            </div>

        )
    }
}

export default Menu;