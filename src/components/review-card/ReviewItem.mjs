
export const ReviewItem = (review) => {
    const html = `<article class ="p-4 flex flex-wrap rounded-lg border-1 border-neutral-300">
                        <header class="flex gap-2">
                            <h3 id="client-name">${review.authorName}</h3>
                            <span class="text-neutral-500"> • </span>
                            <span id="client-country" class="text-neutral-500">Morocco</span>
                        </header>

                        <span id="project-name" class="ms-auto px-3 py-0.5 rounded-lg border-1 border-neutral-300">${review.projectTitle}</span>

                        <div id="review-meta" class="w-full flex gap-2 items-center">
                            <div id="review-rating" class="text-neutral-500">★★★★★</div>
                            <time id="review-date" class="h-fit text-xs text-neutral-500">${review.date}</time>
                        </div>
                        <p id="review-text">${review.content}</p>
                        <span id="review-reply" class=
                            "ms-auto px-3 py-0.5 bg-neutral-300 rounded-lg text-xs font-medium cursor-pointer
                            hover:bg-neutral-200">&#xf075 répondre</span>
                    </article>`       
    return html;
}