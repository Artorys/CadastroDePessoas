class infoCadastro
{
    static sendInfo()
    {
        const registerButton = document.querySelector("#register-button")
        const cadastros = []      
        registerButton.addEventListener("click",function(el)
        {
            el.preventDefault() 
            const nome = document.querySelector("#nome").value
            const sobrenome = document.querySelector("#sobrenome").value
            const data_nascimento = document.querySelector("#data-nascimento").value
            const email = document.querySelector("#email").value
            const contato = document.querySelector("#contato").value
            const telefone = document.querySelector("#telefone").value
            const cargo = document.querySelector("#cargo").value
            
            const pessoaCadastrada = new Cadastro(nome,sobrenome,data_nascimento,email,contato,telefone,cargo)
            
            cadastros.push(pessoaCadastrada)
            infoCadastro.arrayCadastros = cadastros
            Cadastrar.arrayCadastros = cadastros
            Cadastrar.listarCadastro(pessoaCadastrada)
        })
    }
    static filterCard()
    {
        const btnFiltrar = document.querySelector("#btn")
        let arrayFiltrado = []
        btnFiltrar.addEventListener("click",function()
        {
            const listaDeAlunos = document.querySelector("#lista-de-alunos")
            const cargoValue = document.querySelector("#cargoOption").value
            arrayFiltrado = infoCadastro.arrayCadastros.filter((el)=>
            {
                const {cargo} = el

                if(cargo == cargoValue)
                {
                    return el
                }
                if(cargoValue == "Todos")
                {
                    return el
                }

            })
            
            listaDeAlunos.innerHTML = ""
            arrayFiltrado.forEach(({nome,sobrenome,email,cargo})=>
            {
                Cadastrar.criarCadastro(nome,sobrenome,email,cargo)
            })
        })
    }
}
infoCadastro.sendInfo()
infoCadastro.filterCard()

class Cadastro
{
    constructor(nome,sobrenome,data_nascimento,email,contato,telefone,cargo)
    {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.data_nascimento = data_nascimento;
        this.email = email;
        this.contato = contato;
        this.telefone = telefone;
        this.cargo = cargo;
    }
}

class Cadastrar
{
    static listarCadastro(cadastro)
    {
        const arrayCadastro = []
        let count = 0
        arrayCadastro.push(cadastro)
        for(let i = 0;i < this.arrayCadastros.length;i++)
        {
            const {email : emailCadastro} = arrayCadastro[0]
            const {email : emailCadastros} = this.arrayCadastros[i]
            
            if(emailCadastro == emailCadastros)
            {
                count++
            }
            if(count > 1)
            {
                return window.alert("esse email ja existe")
            }
        }
        arrayCadastro.forEach(({nome,sobrenome,email,cargo})=>
        {
            this.criarCadastro(nome,sobrenome,email,cargo)
        })
    }
    static criarCadastro(nome,sobrenome,email,cargo)
    {
        const painelCadastro = document.querySelector("#lista-de-alunos")

        const liCadastro = document.createElement("li")

        const h2Nome = document.createElement("h2")
        h2Nome.innerText = nome

        const h3Sobrenome = document.createElement("h3")
        h3Sobrenome.innerText = sobrenome

        const pEmail = document.createElement("p")
        pEmail.innerText = email
        
        const pCargo = document.createElement("p")
        pCargo.innerText = cargo

        liCadastro.append(h2Nome,h3Sobrenome,pEmail,pCargo)

        painelCadastro.appendChild(liCadastro)
    }

}
