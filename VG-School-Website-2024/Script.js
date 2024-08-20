const ourSchoolData =[
    {
        Img:"Assets/our-school-1.png",
        Heading:"Vishwakarma Vidyalaya",
        Title:"Bibwewadi"
    },
    {
        Img:"Assets/our-school-2.png",
        Heading:"Wisdom World School",
        Title:"Wakad | Hadapsar"
    },
    {
        Img:"Assets/our-school-3.png",
        Heading:"Universal Wisdom School",
        Title:"Balewadi"
    }
]

const ourSchoolDataHandler=(dataList,index)=>{

return `
<div class="item" id="box${index}">
<div class="school_img">
<img src=${dataList.Img} alt=${index}>
</div>
<div class="heading_wrapper text-center pt-3">
<p class="m-0">${dataList.Heading}</p>
<p class="m-0">${dataList.Title}</p>
</div>
</div>
`
}

document.addEventListener("DOMContentLoaded",()=>{
    const owl_demo1 = document.getElementById("owl-demo1");
    ourSchoolData.forEach((dataList,index)=>{
        owl_demo1.innerHTML+=ourSchoolDataHandler(dataList,index);
    });
    $("#owl-demo1").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
          0: {
            items: 1,
          },
          600: {
            items: 2,
          },
          1000: {
            items: 3,
          },
        },
      });
})