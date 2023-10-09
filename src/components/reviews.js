import { useEffect, useState } from "react"
import { fetchReviews } from "./API";

const { useParams } = require("react-router-dom")

const Reviews = ()=>{
    const{movieId} = useParams()
    const[reviews, setReviews]= useState({});

useEffect(()=>{
    async function getReviewsDetails(){
        try {
            const fetchedReviews = await  fetchReviews(movieId)
            setReviews(fetchedReviews)
            console.log(fetchedReviews)
        } catch (error) {
            console.log(error)
        }
    }
    getReviewsDetails()
}, [])
if (!reviews || !reviews.results) {
    return null;
  }
if(reviews.total_results===0) {
    return (
    "We dont have reviews for this movie.")
}
const reviewsArr = reviews.results;
const reviewsListItems = reviewsArr.map((review)=>{
    return(
    
            <li key={review.id}>
<h3>Author: {review.author}</h3>
<article>{review.content}</article>
            </li>
     
    )
})
return <ul>{reviewsListItems}</ul>   
}
export default Reviews