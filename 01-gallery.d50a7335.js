!function(){function o(o){return o&&o.__esModule?o.default:o}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},p={},i={},t=e.parcelRequired7c6;null==t&&((t=function(o){if(o in p)return p[o].exports;if(o in i){var e=i[o];delete i[o];var t={id:o,exports:{}};return p[o]=t,e.call(t.exports,t,t.exports),t.exports}var a=new Error("Cannot find module '"+o+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(o,e){i[o]=e},e.parcelRequired7c6=t);var a=t("5IjG7"),n=document.querySelector(".gallery"),c=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"}].map((function(o){var e=o.preview,p=o.original,i=o.description;return'\n      <a class="gallery__item" href="'.concat(p,'">\n        <img class="gallery__image" src="').concat(e,'" alt="').concat(i,'" title="').concat(i,'" />\n      </a>\n      ')})).join("");n.insertAdjacentHTML("beforeend",c);new(o(a))(".gallery a",{captionDelay:250,showCounter:!1,scrollZoom:!0,scrollZoomFactor:.3,focus:!0,closeText:"&#10008",navText:["&#128064","&#10140"]})}();
//# sourceMappingURL=01-gallery.d50a7335.js.map
