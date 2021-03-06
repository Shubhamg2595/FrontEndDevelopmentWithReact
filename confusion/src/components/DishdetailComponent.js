import React, { Component } from 'react';
import {
    Card, CardImg, CardImgOverlay, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderComments({ comments, postComment, dishId }) {
    if (comments != null) {
        const commentcomp = 
        comments.map(comment => {
            return (
                <li key={comment.id} >
                    <p>{comment.comment}</p>
                    <p>--{comment.author}
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
        return (
            <div>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                <Stagger in>
                <Fade in>
                    {commentcomp}
                    <CommentForm
                        dishId={dishId}
                        postComment={postComment} />
                        </Fade>
                        </Stagger>
                </ul>

            </div>
        )
    }
    else {
        return (<div></div>)
    }
}

function RenderDish({ dish }) {
    if (dish != null) {
        return (
            <div >
            <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                <Card>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>

                    </CardBody>

                </Card>
                </FadeTransform>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

const DishDetail = (props) => {
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish == null) {
        return (<div></div>)
    }
    else
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>

                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments
                            comments={props.comments}
                            postComment={props.postComment}
                            dishId={props.dish.id} />
                    </div>
                </div>
            </div>
        )
}



export default DishDetail;
