let button = document. querySelector(".button-add-task")
let input = document.querySelector(".input-task")
let listaCompleta = document.querySelector(".list-tasks")

let minhaListaDeItens = []

function adicionarNovaTarefa() {
	minhaListaDeItens.push({
		tarefa: input.value,
		concluida: false
	})


	input.value = ""

	mostraTarefas() 

}

function mostraTarefas() {
	let novaLi = ""

	minhaListaDeItens.forEach((item, posicao) => {
		novaLi = novaLi + `

		<li class="task ${item.concluida && "done"}">
				<img src="./img/checked.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
				<p>${item.tarefa}</p>
				<img src="./img/lixeira.png" 		alt="tarefa-para-o-lixo" onclick="deletarItem(${posicao})">
		</li>
						
		`
	})

	listaCompleta.innerHTML = novaLi

	localStorage.setItem("lista", JSON.stringify(minhaListaDeItens))
}

function concluirTarefa(posicao) {
	minhaListaDeItens[posicao]. concluida = !minhaListaDeItens[posicao]. concluida

	mostraTarefas()

}
	
function deletarItem(posicao){
	minhaListaDeItens.splice(posicao, 1)
	
	mostraTarefas()

}

function recarregarTarefas(){
	let tarefasDoLocalStorage = localStorage.getItem("lista")

	if (tarefasDoLocalStorage){
		minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
	}

	mostraTarefas()
}

recarregarTarefas()

button.addEventListener("click", adicionarNovaTarefa  )