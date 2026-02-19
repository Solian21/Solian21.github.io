
async function pageLoad() {
    //STEP 1
    let zip_code_result = await fetch("https://csumb.space/api/cityInfoAPI.php?zip=93955")
    //STEP 2
    let zip_code_data = await zip_code_result.json();
    console.log("Checking zip_code_data...")
    console.log(zip_code_data)
}

pageLoad()