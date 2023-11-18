function handleForm (event) {
    event.preventDefault();
    const todo = document.getElementById("todoInput");
}

const miArray = [];

miArray.push("Hola 1");
miArray.push("Hola 2");
miArray.push("Hola 3");
miArray.push("Hola 4");
miArray.push("Hola 5 ");

miArray.forEach((e, i)=>{
    console.log(e, i)
})