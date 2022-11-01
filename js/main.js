const imageInput = document.getElementById("imageInput");
const imageContainer = document.getElementById("imageContainer");

imageInput.onchange = (e) => {
    let currenValue = e.target.value;
    switch(currenValue){
        case "kim taehyung":
            console.log("kim taehyung image will be loaded");
            imageContainer.innerHTML = "";
            imageContainer.innerHTML += `
            <img src="https://pbs.twimg.com/media/FT2oxRnaUAAGINd.jpg:large" alt=""> `
            break;
        case "jungkook":
            console.log("jungkook image will be loaded");
            imageContainer.innerHTML = "";
            imageContainer.innerHTML += `
            <img src="https://www.pinkvilla.com/imageresize/jungkook_proof_main_1.jpg?width=752&t=pvorg" alt=""> `
            break;
        case "jimin":
            console.log("jimin image will be loaded");
            imageContainer.innerHTML = "";
            imageContainer.innerHTML += `
            <img src="https://pbs.twimg.com/media/FT2pBpWaQAEdcmZ.jpg:large" alt=""> `
            break;
        case "jin":
            console.log("jin image will be loaded");
            imageContainer.innerHTML = "";
            imageContainer.innerHTML += `
            <img src="https://pbs.twimg.com/media/FT2o5TNaMAECmwL.jpg:large" alt=""> `
            break;
        case "jhope":
            console.log("jhope image will be loaded");
            imageContainer.innerHTML = "";
            imageContainer.innerHTML += `
            <img src="https://lh3.googleusercontent.com/hz0bRU7rQiVZzBzYx206gnd10fYeJjhzfSKspWOJdCnSNmFYLgDE7CdewM_eKagGe9SLbFIbBMlFdbqNAhZc8WUPHc3CLNdMemfKwlSCxV-Nog=w960-rj-nu-e365" alt=""> `

            break;
        case "suga":
            console.log("suga image will be loaded");
            imageContainer.innerHTML = "";
            imageContainer.innerHTML += `
            <img src="https://pbs.twimg.com/media/FT2piPMagAANX5y.jpg:large" alt=""> `
            break;
        case "rm":
        console.log("rm image will be loaded");
        console.log("suga image will be loaded");
            imageContainer.innerHTML = "";
            imageContainer.innerHTML += `
            <img src="https://pbs.twimg.com/media/FT2oqR8WIAA_EpQ?format=jpg&name=4096x4096" alt=""> `
            break;
        default:
            console.log("no image available");
            break;
    }
}