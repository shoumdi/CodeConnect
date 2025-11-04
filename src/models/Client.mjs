import User from "./User.mjs";

class Client extends User {

    constructor(parameters) {
        
    }
    allowedToSubmitMission(){
        return this.name === "client";
    }

}