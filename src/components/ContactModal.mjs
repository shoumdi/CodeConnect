import { emailRegex } from "../assets/images/regex.mjs";

export class ContactModal {
	constructor() {}

	show(){
		document.body.innerHTML += `<div id="contact-modal" class="w-screen h-screen fixed inset-0 bg-black/50 flex items-center justify-center">
				<div class="w-[55vw] mx-auto p-4 bg-neutral-100 rounded-lg shadow-2xl">
					<h3 class="font-semibold">Contact freelance</h3>
					<p>Tell me about your project and let's discuss how I can help</p>
					<form id="contact-form" class="mt-3 flex flex-row gap-4 flex-wrap" action="">
						<div class="shrink-1 basis-[calc(50%-.5rem)]">
							<label for="fname">Nom complet</label><br>
							<input type="text" id="fname" name="fname" class="w-full p-2 bg-neutral-200 rounded-lg">
						</div>
						<div class="shrink-1 basis-[calc(50%-.5rem)]">
							<label for="femail">Email</label><br>
							<input type="email" id="femail" name="femail" class="w-full p-2 bg-neutral-200 rounded-lg invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:outline-pink-500">
						</div>
						<div class="shrink-1 basis-[calc(50%-.5rem)]">
							<label for="fprojet">Projet titre</label><br>
							<input type="text" id="fprojet" name="fprojet" class="w-full p-2 bg-neutral-200 rounded-lg">
						</div>

						<div class="shrink-1 basis-[calc(50%-.5rem)]">
							<label for="fbudget">Budget</label><br>
							<select id="fbudget" name="fbudget" class="w-full p-2 bg-neutral-200 rounded-lg">
								<option selected hidden>Select budget</option>
								<option value"Under $5,000">Under $5,000</option>
								<option value"$5,000 - $10,000">$5,000 - $10,000</option>
								<option value"$10,000 - $25,000">$10,000 - $25,000</option>
								<option value"$25,000 - $50,000">$25,000 - $50,000</option>
								<option value"+$50,000">+$50,000</option>
							</select>
						</div>

						<div class="basis-1/1">
							<label for="ftimeline">Delai</label><br>
							<select id="timeline" name="ftimeline" class="w-full p-2 bg-neutral-200 rounded-lg">
								<option selected hidden>Select timeline</option>
								<option value"Urgent (week)">Urgent (week)</option>
								<option value"$Soon (month)">Soon (month)</option>
								<option value"Flexible">Flexible</option>
							</select>
						</div>
						<div class="basis-1/1">
							<label for="fdetails">Message</label><br>
							<textarea  name="fdetails" id="fmessage" placeholder="Wait for magic to happen."
							class="w-full p-2 resize-none bg-neutral-200 rounded-lg"
							></textarea>
						</div>
						<input type="submit" name="submit" value="Envoyer le message" class="w-full p-3 bg-black text-white rounded-lg disabled:bg-neutral-400" disabled>
						<input id="annuler" type="button" value="Annuler" class="w-full p-3 text-black rounded-lg border-2 border-black">
					</form>
				</div>
		</div>`

		document.forms["contact-form"].addEventListener("keyup",e=>{
			const isEnabled = true;
			const form = document.forms["contact-form"];
			const email = form.femail;
			const isEmailValid = this.#isNotValid(email.value,emailRegex);
			email.invalid;
			console.log(email);

			form.submit.disabled = isEmailValid;			
		})

		document.getElementById("annuler").addEventListener("click",this.hide);
	}
	hide(){
		document.body.removeChild(document.getElementById("contact-modal"))
	}

	onConfirm(callback){
		document.forms["contact-form"].addEventListener("submit",(e)=>{
			e.preventDefault();
			const formData = new FormData(document.forms["contact-form"])
			const data = Object.fromEntries(formData.entries());
			callback(data);
			document.body.removeChild(document.getElementById("contact-modal"));
		})
	}
	#isNotValid(text,reg){
		return !reg.test(text);
	}
	
}
