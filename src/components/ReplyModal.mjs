export const ReplyModal = (review) => {
    return `<div id="reply-modal" class="w-full h-screen bg-white/30 backdrop-blur-none absolute top-0 grid items-center justify-center">
                <div class="w-[45vw] p-4 rounded-lg bg-neutral-50 flex flex-col gap-3">
                    <h3>Reply</h3>
                    <p>${review.content}</p>
                    <textarea id="reply-field" rows="5" placeholder="write your reply" class="resize-none p-3 bg-neutral-200 rounded-lg"></textarea>
                    <button id="submit" class="p-3 bg-black text-white rounded-lg">Submit</button>
                </div>
            </div>` 
}