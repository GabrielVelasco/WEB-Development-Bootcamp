// criar classe lixeira pra armazenar infos e salvra lixeira no BD
// localizacoes fixas

// clica consultarNiveis > requisita infos das lixeiras, API reotrna dados > printa dados (nivel, num...)
// clica em uma lixeira > colher > func calc menor dist do p. atual ate lixeira > printa caminho
// 

class Lixeira {
	constructor(num, sn){
		this.num = num;
		this.sn = sn;
		this.niv = 0;
	}

	// add method retorna niv atual
	nivAtual(){
		// ler dados sensor
		return "dados do sensor";
	}
}

const lix1 = new Lixeira(1, 999);