


export class UserService {
    constructor(repo) {
        this.repo = repo;
    }

    async getFreelancesTestimonies(){
    const testimonies = await this.repo.getTestimonies();
    // console.log(testimonies);
    
    const fTestimonies = Promise.all(
        testimonies.map(async (testimony) => {
            const freelance = await this.repo.getFreelanceById(testimony.freelancerId);
            if(freelance != undefined){
                return {
                    freelanceId:testimony.freelancerId,
                    freelanceName:freelance.fullName,
                    profileImage:freelance.profileImage,
                    job: freelance.job,
                    rating:freelance.rating,
                    reviews:freelance.reviews,
                    testimonies:testimony.testimonies
                }
            }
        })
    )
    
    return fTestimonies;
}

async  getfreelancesReviews() {
    const testimonies = await this.repo.getTestimonies();
    

    return testimonies.reduce((newArr,testimony,index)=>{        
        const freelance = this.repo.getFreelanceById(testimony.freelancerId); 
        console.log(freelance);
                        
        newArr[index] = {
                        id:index,
                        freelancerName:freelance.fullName,
                        profileImage:freelance.profileImage,
                        job:freelance.job,
                        rating:freelance.rating,
                        reviewsCount:testimony.reviews.length,
                        reviews:testimony.reviews
                        }
        return newArr;
    },[])
}

    async getConversations(){
        return await this.repo.getConversations();
    }

    async getConversation(id){
        return await this.repo.getConversation(id);
    }

}


