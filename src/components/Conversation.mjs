import { ConversationTop } from "./ConversationTop.mjs"
import { MessageComposer } from "./MessageComposer.mjs"
import { MessagesContainer } from "./MessagesContainer.mjs"

export const Conversation = (conversation) => {

    return `<div id="conversation" class="size-full flex flex-col">
                ${ConversationTop({
                    userId:conversation.senderId,
                    name:conversation.title,
                    profile:conversation.photo
                })}
                ${MessagesContainer(conversation.messages,conversation.senderId)}
                ${MessageComposer()}
            </div>`
}