const block = document.querySelector('.infoblock');
const button = document.querySelector('button');

button.addEventListener('click', () => {
    const getData = (url) => 
    new Promise ((resolve, reject) => 
        fetch(url)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error))
    )

    getData('https://jsonplaceholder.typicode.com/photos')
    .then(data => {
        data.forEach(el => {
            const bigblock = document.createElement('div'); 
            bigblock.classList.add('block-con')
            block.append(bigblock)    
            const pic = document.createElement('div'); 
            pic.classList.add('pic')
            bigblock.append(pic)      
            pic.style.backgroundImage = `url(${el.url})`
            const title = document.createElement('div');
            title.classList.add('title')
            bigblock.append(title)
            title.innerText = el.title
        })
    })
    .catch(error => console.log(error.message))
})