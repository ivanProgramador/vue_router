/*
A bilbioteca Vue Router permite ter varias rotas dentro de uma mesma aplicação 
sem precisar recarregar a pagina inteira, atenção nesse caso não basta apenas criar o app 
existe uma comando especifico para criar ele com  router 

npm create vue@latest

essa comando vai fazer ele mostrar um questionario antes d fazer a instlação onde é possivel incluir
a lib das rotas.

Criando um rota as rotas são criadas dentro do arquivo index que fica dentro da pasta routes, nesse 
arquivo tem uma função chamada: createRouter que recebe um objeto como parametro esse objeto possui o array 
routes onde cada indice dele é uma rota.

um rota é um objeto que tem o path que eo caminho que da acesso a ela 
o nome e por fim o Component que será renderizado quando essa rota for acessada 
mas esse componete tem que ser importado para o arquivo antes de ser chamado.  

 {
      path: '/',
      name: 'home',
      component: HomeView
 }


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

Router Link 

Os router links são componentes que repsentam sua rota em forma de link 
na prop to ele recebe o link da rota e na parte visual você define qual eo texto 
que vai representar sua rota 

 <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/teste">Teste</RouterLink> <- minha rota teste 
  </nav>

Link com parametros

Para passar um parametro em uma link para selecionar um item especifico 

{
      path: '/teste/:id',
      name: 'home',
      component: HomeView
 }









*/