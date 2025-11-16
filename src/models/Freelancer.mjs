import User from "./User.mjs";

class Freelancer extends User {
    constructor(id,name,role,phoneVerified,hourlyRate,rating,reviews) {
        super(id,name,role,phoneVerified);
        this.hourlyRate = hourlyRate;
        this.rating = rating;
        this.reviews = reviews;
    }
}
let services = [];
function createService(){
    const service = {
        id:inputName.value,
        nom:"kkk"

    }
    services.push(service);
}