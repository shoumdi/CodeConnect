export const Message = (message, isClient = true) => {
    return `<div class="w-fit p-2 ${(isClient)?"self-end" : ''} flex flex-col ${isClient? `bg-neutral-200` : `bg-indigo-600 text-white`} rounded-lg">
                <p>${message.content}</p>
                <span class="text-xs ms-auto">${message.time}</span>
            </div>`
}