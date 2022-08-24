console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", ()=>{
    fetchDogImages();
    fetchDogBreeds();
    filterDogs();
    let header = document.querySelector("h1");
    heading.style.marginLeft = "20px";
})

//Dog Images Fetched/appended images for the dogs
function fetchDogImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then((response)=>response.json())
    .then((imgData) =>{
        let dogImg = imgData.message

        dogImg.forEach(dogImg =>{
            let imageContainer = document.getElementById("dog-image-container")
            let images = document.createElement("img");
            imageContainer.style.display = 'flex'
            imageContainer.style.margin = '10px'
            imageContainer.style.padding = '4px'
            imageContainer.style.height = '30vh'
            imageContainer.appendChild(images)

            images.src = dogImg;
            images.style.height = 'auto'
            images.style.width = '22%'
            images.style.padding = '7px'
        })
    })

}

//Dog Breeds fetch code

function fetchDogBreeds(){
    const URLdogBreed = 'https://dog.ceo/api/breeds/list/all'
    fetch (URLdogBreed)
    .then((response)=> response.json())
    .then((dogBreedData) =>{
        let breedList = dogBreedData.message
        for (const k9Breed in breedList){
            let ul = document.querySelector('#dog-breeds')
            let li = document.createElement('li')
            li.textContent = k9Breed
            ul.appendChild(li)
            li.addEventListener("click", () =>{
                li.style.color = "green"
            })
        }
    })
}

//Filtering the breeds 
function filterDogs(){
    let dropDownList = document.querySelector('select-');
    dropDownList.addEventListener('click', () => {
        let letter = dropDownList.value
        let div = document.createElement('div')
        let body = document.querySelector('body')
        document.body.appendChild(div)
        for (const k9Breed in breedList) {
            if (letter === 'a'){
                if(k9Breed.charAt(0) === 'a'){
                    let filterA = document.createElement('li')
                    filterA.textContent = k9Breed
                    return div.appendChild(filterA)
                }
            }
            else if (letter === 'b'){
                if(k9Breed.charAt(0) === 'b'){
                    let filterB = document.createElement('li')
                    filterB.textContent = k9Breed
                    return div.appendChild(filterB)
                }
            }

            else if(letter === 'c'){
                if(k9Breed.charAt(0) === 'c'){
                    let filterC = document.createElement('li')
                    filterC.textContent = k9Breed
                    return div.appendChild(filterC)
                }
            }
            else if(letter === 'd'){
                if(k9Breed.charAt(0) === 'd'){
                    let filterD = document.createElement('li')
                    filterD.textContent = k9Breed
                    return div.appendChild(filterD)
                }
            }
        }
    
        

    })
}


