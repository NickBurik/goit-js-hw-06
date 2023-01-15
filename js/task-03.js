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

const ulElem = document.querySelector(".gallery");

for (const image of images) {
  const liElem = document.createElement("li");
  const imageElem = document.createElement("img");
  imageElem.src = image.url;
  imageElem.alt = image.alt;
  imageElem.width = 640;
  liElem.appendChild(imageElem);
  ulElem.appendChild(liElem);
};
