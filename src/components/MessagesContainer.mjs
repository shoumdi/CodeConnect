import { Message } from "./Message.mjs"

export const MessagesContainer = (messages,clientId) => {    
    return `<ul id="messages-container" class="size-full p-4 flex flex-col gap-3">
        ${messages.map(message=> Message(message,clientId === message.sender_id)).join("")}
    </ul>
    `
}