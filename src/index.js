console.log('%c HI', 'color: firebrick')
document.addEventListener('DOMContentLoaded', () => {
    // on page load, fetches the images using the url above ⬆️
    // parses the response as JSON
    // adds image elements to the DOM for each 🤔 image in the array


    fetch('https://dog.ceo/api/breeds/image/random/4')
        .then(res => res.json())
        .then(data => {
            data.message.forEach(imgUrl => {
                const dogImg = document.createElement('img')
                dogImg.src = imgUrl
                document.getElementById("dog-image-container").appendChild(dogImg)
            })
        })

    // on page load, fetches all the dog breeds using the url above ⬆️
    // adds the breeds to the page in the <ul> provided in index.html

    fetch('https://dog.ceo/api/breeds/list/all')
        .then(res => res.json())
        .then(data => {
            const breeds = data.message
            // Once all of the breeds are rendered in the <ul>, add JavaScript so that, when the user clicks on any one of the <li>s, the font color of that <li> changes. 
            // This can be a color of your choosing.
            for (const breed in breeds) {
                const breedList = document.createElement('li')
                breedList.textContent = breed
                document.getElementById('dog-breeds').appendChild(breedList)
                breedList.addEventListener('click', () => {
                    if (breedList.style.color == "red") {
                        breedList.style.color = "black"
                    } else { breedList.style.color = "red" }
                })
            }
        })

    // Once we are able to load all of the dog breeds onto the page, 
    // add JavaScript so that the user can filter breeds that start with a particular letter using a dropdownLinks to an external site..

    const letterDown = document.getElementById('breed-dropdown')
    letterDown.addEventListener('change', filter)
    function filter() {
        const selectLetter = letterDown.value
        const breedListItems = document.querySelectorAll('#dog-breeds li')
        breedListItems.forEach(breedListItem => {
            const breedName = breedListItem.textContent.toLowerCase()

            if (selectLetter === 'all' || breedName.startsWith(selectLetter)) {
                breedListItem.style.display = 'block'
            } else {
                breedListItem.style.display = 'none'
            }
        })
    }
})