### Criar um servidor
* Esse servidor vai rodar na porta 8000
* Vai ter 3 rotas 
  * /feed
  * /home
  * /settings
* A rota /settings tem senha (pode colocar qualquer senha)
  * Se o usuario digitar a senha errada vai aparecer 403
  * Se digitar a senha certa mostra a pagina
* A rota /feed vai receber um parametro ?order= que tem dois valores asc (ascendente) desc (descendente), se o valor for asc mostrar uma lista na ordem 1, 2, 3, se for desc mostrar uma lista 3, 2, 1
* A rota home vai receber um parametro `nome`, esse parametro pode ter qualquer valor, e o valor do parametro nome deve ser mostrado na pagina.