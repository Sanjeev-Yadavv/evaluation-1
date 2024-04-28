let btn = document.querySelector("button")




function showData(arr){
    let tbody = document.querySelector("tbody")
    tbody.innerHTML = ""

    arr.forEach(ele => {
        let tr = document.createElement("tr")

        let td1 = document.createElement("td")
        td1.innerHTML = ele.id

        let td2 = document.createElement("td")
        td2.innerText = ele.name

        let td3  = document.createElement("td")
        td3.innerText = ele.gender

        let td4 = document.createElement("td")
        td4.innerText = ele.department

        let td5 = document.createElement("td")
        td5.innerText = ele.salary

        tr.append(td1,td2,td3,td4,td5)
        tbody.append(tr)


    });
}


let gender = document.getElementById("gender")
gender.addEventListener("change",()=>{
    let value = gender.value
   if(value === "default"){
    fetch(" https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
   
    .then((res)=>{
        
        return res.json()
    })
    .then((data)=>{
        // console.log(data.data)
        showData(data.data)
    })
   }
   else{
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=gender&filterValue=${value}`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        showData(data.data)
    })
   }
})

let salary = document.getElementById("salary")
salary.addEventListener("change",()=>{
    let value = salary.value
   if(value === "default"){
    fetch(" https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
   
    .then((res)=>{
        
        return res.json()
    })
    .then((data)=>{
        // console.log(data.data)
        showData(data.data)
    })
   }
   else{
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&sort=salary&order=${value}`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        showData(data.data)
    })
   }
})


let department = document.getElementById("department")
department.addEventListener("change",()=>{
    let value = department.value
   if(value === "default"){
    fetch(" https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
   
    .then((res)=>{
        
        return res.json()
    })
    .then((data)=>{
        // console.log(data.data)
        showData(data.data)
    })
   }
   else{
    fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=1&limit=10&filterBy=department&filterValue=${value}`)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        showData(data.data)
    })
   }
})

btn.addEventListener("click",()=>{
    fetch(" https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees")
   
    .then((res)=>{
        
        return res.json()
    })
    .then((data)=>{
        // console.log(data.data)
        showData(data.data)
    })
})