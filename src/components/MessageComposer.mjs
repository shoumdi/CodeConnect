

export const MessageComposer = () => {
    return `<div class="w-full h-16 p-2 bg-neutral-200 flex">
                <div id="include" class="h-full aspect-square flex items-center justify-center rounded-full hover:bg-neutral-400"><i class="fa-solid fa-upload"></i></div>
                <input type="text" class="w-full outline-none" placeholder="Write a message to your client">
                <div id="send" class="h-full aspect-square flex items-center justify-center rounded-full hover:bg-green-200"><i class="fa-regular fa-paper-plane"></i></div>
        </div>` 
}