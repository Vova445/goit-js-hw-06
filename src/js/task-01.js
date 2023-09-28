const all = document.querySelectorAll("li.item");
console.log("Number of categories:", all.length);

all.forEach((category) => {
  const categoryName = category.querySelector("h2").textContent;
  const element = category.querySelectorAll("li").length; 
  
  console.log(`Category: ${categoryName}`);
  console.log("Elements:", element);
});
