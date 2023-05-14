const input_element = document.querySelector('.items')
let kit = [
    {
        name:'kit1',
        price:'450,000frs',
        location:'Bamenda',
        image:'./Defence/Images/kitchen1.jpg'
    },
    {
        name:'kit2',
        price:'250,000frs',
        location:'Douala',
        image:'./Defence/Images/kitchen2.jpg'
    },
    {
        name:'kit3',
        price:'200,000frs',
        location:'Bamenda',
        image:'./Defence/Images/kitchen3.jpg'
    },
    {
        name:'kit4',
        price:'50,000frs',
        location:'Bamenda',
        image:'./Defence/Images/kitchen4.jpg'
    },
    {
        name:'kit5',
        price:'80,000frs',
        location:'Yaounde',
        image:'./Defence/Images/kitchen5.jpg'
    },
    {
        name:'kit6',
        price:'250,000frs',
        location:'Bamenda',
        image:'./Defence/Images/kitchen6.jpg'
    },
    {
        name:'kit7',
        price:'50,000frs',
        location:'Bamenda',
        image:'./Defence/Images/kitchen7.jpg'
    },
    {
        name:'kit8',
        price:'100,000frs',
        location:'Bamenda',
        image:'./Defence/Images/kitchen8.jpg'
    },
    {
        name:'kit9',
        price:'250,000frs',
        location:'Bamenda',
        image:'./Defence/Images/kitchen9.jpg'
    },
]

function createImages(){
    let added_img = 0

    kit.forEach(img => {
        if (added_img <= kit.length){
            input_element.innerHTML += `<div class="item">
            <div class = 'profile'>
            <img src='${img.image}' alt='profile'></div>
            <span>
            <ion-icon name="bookmark"></ion-icon>
        </span>
            <h3>Price:${img.price}</h3>
            <h3>location:${img.location}</h3>
            <h3>Shop Location:${img.shop}</h3>
            </div>`

        }
        
    })
    added_image++
}
createImages()

