export const ConversationItem = (item) => {
    const unread = (item.unread_count > 0)? `<span class="size-5 text-xs text-center bg-green-500 rounded-full">${item.unread_count}</span>` : ""
    return `<div type="conversation-item" id="${item.conversation_id}" class="w-full p-2 flex gap-3 items-start rounded-lg hover:bg-neutral-300">
                        <img src = "../assets/images/${item.avatar_url}" class="size-10 aspect-square rounded-full">

                        <div class="w-full">
                           <div class="flex justify-between">
                            <h6 class="font-medium">${item.title}</h6>
                            <span class="text-green-400">08:22</span>
                        </div>
                        <div class="flex justify-between gap-2">
                            <p class = "line-clamp-1">${item.last_message.content_preview}</p>
                            ${unread}  
                        </div> 
                        </div>
            </div>`
}