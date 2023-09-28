const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const galleryList = document.querySelector(".gallery");

const createGalleryItem = ({ url, alt }) => {
  const listItem = document.createElement("li");
  listItem.classList.add("gallery-items");

  const image = document.createElement("img");
  image.src = url;
  image.alt = alt;
  image.classList.add("gallery-images");

  listItem.appendChild(image);
  return listItem;
};

images.forEach((image) => {
  const galleryItem = createGalleryItem(image);
  galleryList.appendChild(galleryItem);
});

const cssElements = document.createElement("style");
cssElements.innerHTML = `
.gallery {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin: 0;
  justify-content: center; 
}

.gallery-items {
  flex: 1;
  margin: 50px 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden; 
  transition: transform 0.2s; 
  max-width: 450px;
  border-radius: 30px; 
}

.gallery-items:hover {
  transform: translateY(-5px) scale(1.1); 
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.4); 
}

.gallery-images {
  width: 100%; 
  height: 100%;
  border-radius: 8px; 
}

`;
document.head.appendChild(cssElements);