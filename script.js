class CreatePencils{
    constructor(name, color, qty){
        this.name=name;
        this.color=color;
        this.qty=qty;
    }

    erase(){
        document.querySelectorAll("h1").forEach((ele)=>{
            if(ele.style.color===this.color){
                ele.remove();
            }
        })
    }
    write(text){
        let h1=document.createElement("h1");
        h1.textContent=text;
        h1.style.color=this.color;
        document.body.append(h1);
    }
}

let pencil1=new CreatePencils("nataraj", "red",2);
let pencil2=new CreatePencils("camlin", "yellow",5);