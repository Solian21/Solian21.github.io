
//updating on type
let zipCode_input = document.querySelector("#zipCode-input");
document.addEventListener("input", async function () {
    //STEP 1
    let zip_code_result = await fetch(`https://csumb.space/api/cityInfoAPI.php?zip=${zipCode_input.value}`); // API to get the city, latitude, and longitude based on a zip code:
    //STEP 2
    let zip_code_data = await zip_code_result.json();
    // console.log("Checking zip_code_data...");
    // console.log(zip_code_data);



    //Safe way to have API so in case we have an error
    let url = `https://csumb.space/api/cityInfoAPI.php?zip=${zipCode_input.value}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data);

        // adding data from interface
        document.querySelector("#city-display").textContent = data.city;
        document.querySelector("#latitude-display").textContent = data.latitude;
        document.querySelector("#longitude-display").textContent = data.longitude;


    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    } //catch


});

document.querySelector("#password-input").addEventListener("click", async function () {
    let url = "https://csumb.space/api/suggestedPassword.php?length=8";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data);
        document.querySelector("#password-suggestion").classList.add("show");
        document.querySelector("#password-suggestion").textContent = `Suggested Password: ${data.password}`;
    

    } catch (err) {
        if (err instanceof TypeError) {
            alert(`(Password API) Error accessing API endpoint ${err}`);
        } else {
            alert(err.message);
        }
    } //catch
});

let username = document.querySelector("#username-input");
console.log(username.value);
document.querySelector("#username-input").addEventListener("input", async function() {
    let username_val = username.value;
    let username_length = username_val.length;
    document.querySelector("#username-valid").classList.add("show");
    if (username_length < 3) {
        document.querySelector("#username-valid").textContent = "Username needs to be at least 3 characters";
        document.querySelector("#username-valid").style.color = "red";
        return;
    }
    
    let url = `https://csumb.space/api/usernamesAPI.php?username=${username.value}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        console.log(username)
        const data = await response.json();
        console.log(data);
        
        const isAvailable = data.available
        console.log(isAvailable)
        let msg = document.querySelector("#username-valid");
        if(isAvailable) {
            msg.textContent = `This is a valid username!`;
            msg.style.color = 'green';
        }
        if(!isAvailable) {
            msg.textContent = `This username has already been taken.`;
            msg.style.color = 'red';            
        }
        

    } catch (err) {
        if (err instanceof TypeError) {
            alert(`(Password API) Error accessing API endpoint ${err}`);
        } else {
            alert(err.message);
        }
    } //catch
});