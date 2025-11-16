import { fetchData, isEmptyObject } from "../utils/utilities.mjs"



export class Repository {
    constructor() {
        this.users = [];
        this.testimonies = [];
        this.conversations = [];
    }


    async getTestimonies(){
        if(isEmptyObject(this.users)) this.users = await fetchData("../data/users.json"); 
        if(isEmptyObject(this.testimonies)) this.testimonies = fetchData("../data/testimonies.json");
    return this.testimonies }

     
  

    getFreelanceById(id){        
    return this.users.freelances?.find(user=> user.id === id);}


    async getTestimoniesList(){
    const testimonies = await fetchData("../data/testimonies.mjs");}


    async getConversations(){
        if(isEmptyObject(this.conversations)) this.conversations = await fetchData("../data/conversations.json"); 
    return this.conversations }
    async getConversation(id){
                const  c = this.conversations.find(c=>c.conversation_id===id); 
                const messages = (await fetchData("../data/messages.json")).find(m=>m.conversation_id === id).messages;
                               console.log(messages);
                               
                const cnv = {
                    id:id,
                    senderId:c.last_message.sender_id,
                    title:c.title,
                    photo:c.avatar_url,
                    messages:messages
                }
        return cnv;
    }


}


 