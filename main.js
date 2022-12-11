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

let postLike = [];

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
    if (image.author.image != null) {
        imageElement.src = image.author.image;
        imageElement.alt = image.author.name;
    } else {
        let name = image.author.name;
        const newName = name.split(" ");

        imageElement.alt = newName[0].substring(0, 1) + newName[1].substring(0, 1);
    }

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
    timeElement.innerHTML = image.created
    metaDataELement.append(timeElement);


    // PARTE DEL CONTENUTO VA APPESO NEL post content
    //CREO il conenuto del post, INSERISCO nel postElement
    const postContent = document.createElement("div");
    postContent.classList.add("post__text");
    postContent.innerHTML = image.content;
    postElement.append(postContent);

    //PARTE DELL'IMMAGINE, va inserita nel postElement
    //CREO il postDivImage (il parent della postImage), AGGIUGNO le classi, INSERISCO nel postElement
    const postDivImage = document.createElement("div");
    postDivImage.classList.add("post__image");
    postElement.append(postDivImage);

    //CREO il postImage, MODIFICO le proprietà src e alt, INSERISCO nel postDivImage
    const postImage = document.createElement("img");
    postImage.src = image.media;
    postImage.alt = image.author.name;
    postDivImage.append(postImage);


    //PARTE DEL POST FOOTER CON BOTTONE PER IL "MI PIACE" E NUMERO DI MI PIACE, APPENDERE NEL postElement
    //CREO il postFooterElement (parent), INSERISCO nel postElement
    const postFooterElement = document.createElement("div");
    postFooterElement.classList.add("post__footer");
    postElement.append(postFooterElement);

    //LIKE PARENT
    const likeELementParent = document.createElement("div");
    likeELementParent.classList.add("likes", "js-likes");
    postFooterElement.append(likeELementParent);

    //PARENT OF THE BUTTON LIKE
    const likesButtonElement = document.createElement("div");
    likesButtonElement.classList.add("likes__cta");
    likeELementParent.append(likesButtonElement);

    //a ELEMENT
    const linkButtonLike = document.createElement("a");
    linkButtonLike.classList.add("like-button", "js-like-button");
    linkButtonLike.href = "#!";
    likesButtonElement.append(linkButtonLike);


    //icon ELEMENT  
    const iconLikeButton = document.createElement("i");
    iconLikeButton.classList.add("like-button__icon", "fas", "fa-thumbs-up");
    iconLikeButton.ariaHidden = "true";
    linkButtonLike.append(iconLikeButton);

    //span Element
    const spanLikeElement = document.createElement("span");
    spanLikeElement.classList.add("like-button__label");
    spanLikeElement.innerHTML = "Mi Piace";
    linkButtonLike.append(spanLikeElement);

    let counter = 0;
    let like = image.likes;



    linkButtonLike.addEventListener("click", function () {
        if (counter === 0) {
            counter++;
            postLike.push(image.id);
        } else {
            counter = 0;
        }

        linkButtonLike.classList.toggle("color-red");
        like = image.likes + counter;
        likeCounter.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${like}</b> persone`;
    });





    //LIKES COUNTER INSERIRE NEL postFooterElement
    const likeCounter = document.createElement("div");
    likeCounter.classList.add("likes__counter");
    likeCounter.innerHTML = `Piace a <b id="like-counter-1" class="js-likes-counter">${like}</b> persone`;
    likeELementParent.append(likeCounter);




});

//STAMPO array vuoto
console.log("Post a cui hai messo Like: " + postLike);

//RIEMPIO array con ID dei post a cui l'utente ha messo like
setTimeout(postLikeOutput, 5000);

function postLikeOutput() {
    if (postLike.length != 0) {
        console.log("Post a cui hai messo Like per ID: " + postLike);
    } else {
        console.log("Non hai messo Like al momento");
    }

}

