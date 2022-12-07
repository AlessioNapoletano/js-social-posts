const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

//PRENDO il div container presente nell'index
const containerElement = document.getElementById("container");

posts.forEach(image => {
    //CREO il postElement, AGGIUNGO la classe post, INSERISCO il postElement nel containerElement
const postElement = document.createElement("div");
postElement.classList.add("post");
containerElement.append(postElement);


//CREO l'headerPostElement, AGGIUNGO la classe post_header, INSERISCO headerPostElement nel postElement
const headerPostElement = document.createElement("div");
headerPostElement.classList.add("post__header");
postElement.append(headerPostElement);

//CREO l'postMetaElement, AGGIUNGO la classe post-meta, INSERISCO il postMetaElement nel headerPostElement
const postMetaElement = document.createElement("div");
postMetaElement.classList.add("post-meta");
headerPostElement.append(postMetaElement);

//CREO il postMetaIconElement, AGGIUNGO la classe post-meta__icon, INSERISCO il postMetaElement nel postMetaElement
const postMetaIconElement = document.createElement("div");
postMetaIconElement.classList.add("post-meta__icon");
postMetaElement.append(postMetaIconElement);

//CREO l'imageElement, AGGIUNGO la classe profile-pic, MODIFICO le proprietà src e alt, INSERISCO l'imageElement in postMetaIconElement
const imageElement = document.createElement("img");
imageElement.classList.add("profile-pic");
imageElement.src= image.author.image;
imageElement.alt= image.author.name;
postMetaIconElement.append(imageElement);

//          META DATA ELEMENT -- > SALVIAMO LE INFORMAZIONI DELL'AUTORE E DELLA DATA DI CREAZIONE DEL POST
//CREO il metaDataELement, AGGIUNGO la classe post-meta__data, INSERISCO nel postMetaElement
const metaDataELement = document.createElement("div");
metaDataELement.classList.add("post-meta__data");
postMetaElement.append(metaDataELement);

//CREO il authorElement, AGGIUNGO la classe post-meta__author, MODIFICO l'innerHTML, INSERISCO il authorElement nel metaDataELement
const authorElement = document.createElement("div");
authorElement.classList.add("post-meta__author");
authorElement.innerHTML = image.author.name;
metaDataELement.append(authorElement);

//CREO il authorElement, AGGIUNGO la classe post-meta__author, MODIFICO l'innerHTML, INSERISCO il authorElement nel postMetaElement
const timeElement = document.createElement("div");
timeElement.classList.add("post-meta__time");
timeElement.innerHTML = image.created;
metaDataELement.append(timeElement);



// PARTE DEL CONTENUTO VA APPESO NEL post content
//CREO il conenuto del post
const postContent = document.createElement("div");
postContent.classList.add("post__text");
postContent.innerHTML = image.content;
postElement.append(postContent);
});


// post di esempio/template, da togliere/commentare e generare da JS
//         <div class="post"> ok
//             <div class="post__header"> ok 
//                 <div class="post-meta">  
      ok            
//                     <div class="post-meta__icon"> ok 
//                         <img class="profile-pic" src="https://unsplash.it/300/300?image=15" alt="Phil Mangione">  ok                  
//                     </div> fine div image

//                     <div class="post-meta__data">
//                         <div class="post-meta__author">Phil Mangione</div>
//                         <div class="post-meta__time">4 mesi fa</div>
//                     </div>

//                 </div>
//             </div>

//             <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
//             <div class="post__image">
//                 <img src="https://unsplash.it/600/300?image=171" alt="">
//             </div>
//             <div class="post__footer">
//                 <div class="likes js-likes">
//                     <div class="likes__cta">
//                         <a class="like-button  js-like-button" href="#" data-postid="1">
//                             <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
//                             <span class="like-button__label">Mi Piace</span>
//                         </a>
//                     </div>
//                     <div class="likes__counter">
//                         Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
//                     </div>
//                 </div> 
//             </div>            
//         </div>


