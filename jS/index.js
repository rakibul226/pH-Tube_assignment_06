const handleCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();
    // console.log(data);

    const tabContainer = document.getElementById("tab-container");

    // console.log(data.data[0].category);
    data.data.forEach((element) => {
        // console.log(element.category);
        const div = document.createElement("div");
        div.innerHTML = `
        
        <a class="tab hover:bg-red-600 hover:text-white rounded-sm bg-slate-100">${element.category}</a>
        `;
        tabContainer.appendChild(div);
    });
}




handleCategory();