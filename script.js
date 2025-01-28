let product_images=document.querySelector('.products')
let menu=document.querySelector('.menu')
let menuIcon=document.querySelector('.fa-bars')
let inputBox= document.getElementById('input-box')

menuIcon.addEventListener("click",()=>{
    if(menu.style.display==='none'){
        menu.style.display='flex'
    }else{
        menu.style.display='none'
    }
})

let basket=JSON.parse(localStorage.getItem("save"))||[]


    let generate_products=(items)=>{
        product_images.innerHTML=items.map((product)=>{
            let {id,name,price,img}=product

            return `<div class="item">
            <img width="170" src="${img}" alt="">
            <div class="desc">
                <p>${name}</p>
                <p>R${price}</p>
                <div class="btn">
                    <button onclick="add('${id}','${name}',${price},'${img}')">Add cart</button>
                  </div>
            </div>
        </div>`
        }).join('')
    }
    generate_products(products)

    let add = (id,name,price,img)=>{
        let search=basket.find((x)=>x.id ===id)

        if (search){
            search.item+=1
        }else{
            basket.push({
                id:id,
                name:name,
                price:price,
                img:img,
                item:1
            })
        }
        update(id)
        saveItems()
    }
let update=(id)=>{
    document.querySelector('.quantity').innerHTML=basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
}
update()
let saveItems=()=>{
    localStorage.setItem("save",JSON.stringify(basket))
    
}
inputBox.addEventListener('keyup',(e)=>{
    let searchText=e.target.value.toLowerCase()
    let filterData=products.filter((x)=>{
      return  x.name.toLowerCase().includes(searchText)
    })
    generate_products(filterData)
})


searchbtn =document.querySelector('.fa-magnifying-glass')

searchbtn.addEventListener("click",()=>{
    if (inputBox.style.display==='none'){
        inputBox.style.display='flex'
    }else{
         inputBox.style.display='none'
    }
})
