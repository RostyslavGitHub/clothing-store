import { useState } from 'react';
import {reviewsData} from '../../reviewsData'
import StarsBelt from './StarsBelt';

const Reviews = ({ selectedItem }) => {
    const [visibleReviews1, setVisibleReviews1] = useState(0)
    const [visibleReviews2, setVisibleReviews2] = useState(2)
    const filteredData = reviewsData.filter(item => selectedItem.map(item => item.id).includes(item.item));

    const showReview = (mathematicalSymbol) => {
        if (mathematicalSymbol === '+'){
            if(visibleReviews2 < filteredData.length){
                setVisibleReviews1(visibleReviews1 + 1);
                setVisibleReviews2(visibleReviews2 + 1);
            } else {
                setVisibleReviews1(0);
                setVisibleReviews2(2);
            }
        }
        if (mathematicalSymbol === '-'){
            if(visibleReviews1 > 0){
                setVisibleReviews1(visibleReviews1 - 1);
                setVisibleReviews2(visibleReviews2 - 1);
            } else {
                setVisibleReviews1(filteredData.length - 2);
                setVisibleReviews2(filteredData.length);
            }
        }
    }

    if (filteredData.length === 0){
        return null
    }

    return (
        <>
            <div className="reviews">
                <h2 className="title">Reviews</h2>
                <div className="reviews__row">

                {filteredData.slice(visibleReviews1, visibleReviews2).map(item => <div key={item.id} className="reviews__item">
                    {item.img ? <img src={`../images/${item.img}`} alt="" className="reviews__img" /> : null}
                    <div className="reviews__info">
                    <div className="reviews__stars">
                        <div className="reviews__star">★</div>
                        <div className="reviews__star" style={ item.stars < 2 ? {color: "#ffffff"} : null}>★</div>
                        <div className="reviews__star" style={ item.stars < 3 ? {color: "#ffffff"} : null}>★</div>
                        <div className="reviews__star" style={ item.stars < 4 ? {color: "#ffffff"} : null}>★</div>
                        <div className="reviews__star" style={ item.stars < 5 ? {color: "#ffffff"} : null}>★</div>
                    </div>
                    <div className="reviews__username">{item.name}</div>
                    <div className="reviews__text">
                        {item.description}
                    </div>
                    <div className="reviews__date">{item.date}</div>
                    </div>
                </div>)}

                </div>
                {(filteredData.length > 2) ? <div className="reviews__buttons">
                <button className="reviews__button" onClick={()=> showReview('-')}>
                    <svg width={26} height={26} fill="currentColor" viewBox="0 0 16 16">
                    <path
                        fillRule="evenodd"
                        d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
                    />
                    </svg>
                </button>
                <button className="reviews__button" onClick={()=> showReview('+')}>
                    <svg width={26} height={26} fill="currentColor" viewBox="0 0 16 16">
                    <path
                        fillRule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                    </svg>
                </button>
                </div> : null}
            </div>
            <StarsBelt />
        </>
        
    )
}

export default Reviews;