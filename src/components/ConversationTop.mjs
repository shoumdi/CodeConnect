export const ConversationTop = (user) => {
    return `<div class="w-full p-3 bg-neutral-200 flex gap-3 items-center">
                    <div class="h-full aspect-square flex justify-center items-center rounded-full md:hidden"><i class="fa-solid fa-arrow-left"></i></div>
                    <img src="../assets/images/${user.profile}" class="size-10 rounded-full">
                    <h6>${user.name}</h6>
                    <div class="ms-auto h-full aspect-square flex justify-center items-center rounded-full hover:bg-neutral-400"><i class="fa-solid fa-ellipsis-vertical"></i></div>
                </div>`
}