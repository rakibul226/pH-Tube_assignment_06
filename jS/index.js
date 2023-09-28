const handleCategory = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
    const data = await response.json();

    const tabContainer = document.getElementById("tab-container");

    data.data.forEach((element) => {
        const div = document.createElement("div");
        div.innerHTML = `      
        <a onclick="handleLoadCard(${element.category_id})" class="tab hover:bg-red-600 hover:text-white rounded-sm bg-slate-100">${element.category}</a>
        `;      
        tabContainer.appendChild(div);
    }); 
}

const handleLoadCard = async (categoryId) =>{
    const response = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
    const data = await response.json();
    

    cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML="";

        data.data.forEach((element) => {
            const div = document.createElement("div");
            div.innerHTML = `

            <div class="card w-auto h-80 bg-base-100 shadow-xl">
                <figure><img class="h-60" src="${element.thumbnail}" alt=""></figure>  
                <div class="card-body flex flex-row">
                    <div>
                    <img class="h-6 w-6 rounded-3xl mt-1" src="${element.authors[0].profile_picture}" alt="">
                    </div>               
                    <div ">   
                        <h2 class="card-title font-semibold">${element.title}</h2>
                        <p>${element.authors[0].profile_name}</p>
                        <div class="flex">
                        <p>${element.others.views} views ${element.authors[0].verified ? "<img class='h-6 w-6 inline'  src='verified.png'>":"<img src=''>"}</p>
                        <p></p>
                        </div>
                    </div>
                </div>
            </div>      
            `;
            cardContainer.appendChild(div);
        });
}




// const drawingData = async () =>{
//     const drawing=await fetch('https://openapi.programming-hero.com/api/videos/category/1005');
//     // const main_container=document.getElementById('main-container');
//     // main_container.innerHTML='';
//     drawing(drawing); 
// }

// const   drawing =async (drawing) => {
//     const main_container=document.getElementById('main-container');
//     main_container.innerHTML='';
//    const drawingData=await  drawing.json();
//    const arr=drawingData.data;
//    if(arr.length===0){
//     const drawing=document.getElementById('drawing');
//     drawing.innerHTML=`
//     <img src="logo.png" class="flex mx-auto">
//     <h1 class="text-[#171717] text-4xl font-semibold text-center mt-4 mb-10">Oops!! Sorry, There is no <br>content here</h1>
//     `;
//    }
// }





// const sortByView = async() => {
    
//     const fetchCategory =async() =>{

//         const response = await fetch("https://openapi.programming-hero.com/api/videos/categories");
//     const data = await response.json();

//         // console.log(data.data);
//         data.data.forEach((element) => {
//             // console.log(element.category_id);
//             view(element.category_id);
//             // console.log(element.category_id);

//         });
//     }

//    const view = async(categoryId) => {
//     const response2 = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryId}`);
//     const data2 = await response.json();

//     console.log(data);
//    }
// }



handleCategory();
handleLoadCard(1000);
