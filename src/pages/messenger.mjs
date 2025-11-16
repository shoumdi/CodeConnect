import { Conversation } from "../components/Conversation.mjs";
import { ConversationItem } from "../components/ConversationItem.mjs";
import { Repository } from "../repositories/repository.mjs";
import { UserService } from "../services/userService.mjs";

const service = new UserService(new Repository());

const Messenger = async () => {
    
    const conversations = await service.getConversations();
    document.body.querySelector("main").innerHTML = `<div class="w-full h-full flex relative sm:static">
                <div id="side-panel" class="w-full h-full basis-1 sm:basis-1/3 absolute sm:static p-3 sm:border-r-1 sm:border-r-neutral-200">
                    <div>
                        <h1>Messenger</h1>
                        <div class="mt-2 bg-neutral-200 rounded-full">
                            <input type="text" placeholder="Search ..." class="w-full p-2 outline-none">
                        </div>
                        
                        <ul id="conversations" class="mt-6 list-none flex flex-col gap-4">${conversations.map(cnv=>`<li>${ConversationItem(cnv)}</li>`).join("")}</ul>
                    </div>
                </div>
                <div id="message-panel" class="w-full h-full basis-1 sm:basis-2/3 absolute sm:static hidden sm:flex flex-col items-center justify-center">
                    <img src="/illus.jpg" class="size-40">
                    <h3>Open a conversation with your clients.</h3>
                    <p>Make calls to understand your clients needs and deliver a satisfying project</p>
                </div>
            </div>`

            
document.getElementById("conversations")?.addEventListener("click",async (event)=>{
    const target = event.target.closest(`[type="conversation-item"]`);
    if (target) {
        const id = target.getAttribute("id");
        const cnv = await service.getConversation(id);        
        renderConversation(cnv);
    }
})

}

function renderConversation(conversation){    
    document.getElementById("message-panel").innerHTML = Conversation(conversation);
}


await Messenger();