import React , {Component} from 'react';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,
    CardTitle} from 'reactstrap';



class DishDetail extends Component
{
    
    renderComments(comments)
    {
        if(comments!=null)
        {
            const commentcomp = comments.map(comment =>{
                return(
                    <li key={comment.id} >
                        <p>{comment.comment}</p>
                        <p>--{comment.author}
                        <br />
                        &nbsp;
                        {new Intl.DateTimeFormat('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: '2-digit'
                        }).format(new Date(comment.date))}
                        </p>
                    </li>
                )
            })
            return(
                <div className='col-12 col-md-5 m-1'>
                    <h4> Comments </h4>
                    <ul className='list-unstyled'>
                        {commentcomp}
                    </ul>
    
                </div>
            )
        }
        else
        {
            return(<div></div>)
        }
    }
    
    renderDish(dish)
    {
        if (dish!=null)
        {
            return(
            <div className='col-12 col-md-5 m-1'>
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name}/>
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                        
                    </CardBody>
                    
                </Card>
                
                </div>
            )    
        }
        else
        {
            return(
                <div></div>
            )
        }
    }

    render()
    {
        const dish=this.props.dish
        if (dish==null)
        {
            return (<div></div>)
        }
        return(
            <div className="row">
                {this.renderDish(dish)}
                {this.renderComments(dish.comments)}
            </div>
        )
    }
}


export default DishDetail;

{/*
Task 1

In this task you will be adding a new DishdetailComponent to your React application and include the component into the menu component's view so that the details of a specific dish are displayed there:

    Replace the card showing the selected dish in MenuComponent's view with the DishdetailComponent, and make sure to pass the selected dish information as props to the DishdetailComponent.
    Create a new DishDetail class in a file named DishdetailComponent.js in the components folder
    Export the DishDetail class from this file so that it can be imported in MenuComponent.js and used to construct the view of the selected dish.
    Return a <div> from the render() function. This <div> should use the Bootstrap row class to position the content within the <div>. This div will display both the details of the dish in a Card and the list of comments side-by-side for medium to extra large screens, but will stack them for xs and sm screens.
    The card should be enclosed inside a <div> appropriate Bootstrap column classes so that it occupies the entire 12 columns for the xs and sm screen sizes, and 5 columns for md screens and above. Also apply a class of m-1 to this div.
    The comments should be enclosed in a <div> to which you apply appropriate column classes so that it occupies the entire 12 columns for the xs and sm screen sizes, and 5 columns for md screens and above. Also apply a class of m-1 to this div.
    If the dish is null then you should return an empty <div>
*/}