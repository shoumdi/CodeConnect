import { ReviewCard } from "../components/review-card/ReviewCard.mjs";
import { Repository } from "../repositories/repository.mjs";
import { UserService } from "../services/userService.mjs";

const service = new UserService(new Repository());

const reviewsPage = async () => {
    
    const reviews = await service.getfreelancesReviews();

    
    let list = ""
    reviews.forEach(element => {
         list += ReviewCard(element);
    });

    let html = `<ul id="reviews-list" class="flex flex-col gap-4">${list}</ul>` 
        
    
    document.body.querySelector("main").innerHTML = html;
    document.getElementById("reviews-list").addEventListener("click",(event)=>{
        if(event.target.getAttribute("id")==="review-reply") {
            showModal(event,reviews[0].reviews[0]);
        }
        else if(event.target.getAttribute("id")==="see-all") showContactModal();        
                
    })
}







function showModal(event,review){
        const modal = document.querySelector("#reply-modal");
        if(modal===null) document.body.querySelector("main").innerHTML += ReplyModal(review);
        else modal.display.style = "block";                    
        event.stopImmediatePropagation();
        document.body.addEventListener("click",hideModal);
}

function hideModal(event){
    console.log(event);
    document.querySelector("#reply-modal").style.display = "none";
    document.body.removeEventListener("click",hideModal);
    event.stopPropagation();
}


class ContacModal {
    constructor (freelanceId,clientId,fullName,email,subject,message){
        this.freelanceId = freelanceId;
        this.clientId = clientId;
        this.fullName = fullName;
        this.email = email;
        this.subject = subject;
        this.message = message;
    }

    isValid() {
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return validEmail.test(validEmail) && this.fullName && this.subject && this.message;
    }
}


function showContactModal(){
    const modal = document.querySelector("#contact-modal");
    if(modal===null) document.body.querySelector("main").innerHTML += ContactModal();
    else modal.style.display = "block"; 
    document.body.addEventListener("click",(event)=>{
        modal.style.display = "none";
        event.stopPropagation();
    })
}

await reviewsPage()