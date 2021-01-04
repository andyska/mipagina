window.addEventListener("DOMContentLoaded", () =>{
    cons orderButtons = document.querySelectorAll("button[data-order]");

    orderButtons.forEach((item) => {
        //por cada uno de los botones escucha...

        item.addEventListener('click',(event) => {
            //current target actual
            const button = event.currentTarget

            //nodo padre del boton
            const container = button.parentNode
           
            //console.log(button)
            //console.log(container)

            const order={
                id: button.getAttribute("data-order"),
                title: container.querySelector(".title").innerText ,
                price: container.querySelector(".price").innerText
            }

            //console.log(order)
            localStorage.setItem("order", JSON.stringify(order))
            // busco url donde estoy y la reemplace por la order
            const url= window.location.href.replace("resmas.html", "order.html")
            //aqui provoca el cambio de pagina
            window.location.href = url

        })
    });
});