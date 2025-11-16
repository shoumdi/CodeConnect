import { ReviewItem } from "./ReviewItem.mjs";

export function ReviewCard(review){    
    
    const reviewsHtml = review.reviews.reduce((accu,rev)=>{
        accu +=  `<li>${ReviewItem(rev)}</li>`;        
        return accu;
    },"");     

    return `<article class="bg-neutral-50 p-4 rounded-lg border-1 border-neutral-300">
                        <div class="flex flex-wrap gap-x-3">
                            <img id="profile" src=${review.profileImage} alt="profile" class="size-15 bg-neutral-200 rounded-full">
                            <div>
                                <h3 class="text-lg text-neutral-900">${review.freelancerName}</h3>
                                <h4 class="text-lg text-neutral-600">${review.job}</h4>
                                <span class="text-yellow-600">★</span>
                                <span id="user-rating" class="">${review.rating}</span>
                                <span class="text-neutral-500"> • </span>
                                <span id="user-reviews" class="">${review.reviewsCount}</span>
                            </div>
                            
                        </div>
                        <section class="mt-3">
                            <h4 class="text-md font-normal text-neutral-700">&#128231 Témoignages récents</h4>
                            <ul id="testimonies-list" class="my-3 flex flex-col gap-3">${reviewsHtml}</ul>
                            
                        </section>
                        <button id="see-all" class=
                                "mt-1 w-full p-2 rounded-lg border-1 border-neutral-300
                                hover:bg-neutral-200">Voir Profile</button>
                </article>`;
}