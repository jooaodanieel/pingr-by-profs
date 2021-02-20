# Conteúdo Público - Visão de Microsserviços

[[TOC]]

Esta visão é um destaque com relação à visão panorâmica apresentada [aqui][home] e é complementada pela visão [Conteúdo Público - Diagrama de Sequência][dseqviewpings].

![Conteúdo Público - Visão de Microsserviços][msviewpings]

## Introdução

Esta visão mostra a relação dos serviços para atender todas as funcionalidades que vão desde um usuário postando um ping, até este usuário recebendo notificações PUSH que seus seguidores deram curtidas em seu último ping.

Para isso, um usuário precisa receber uma solicitação de outro para segui-lo, de responsabilidade do serviço **Seguir + Amigos**. Quando aprovada (ocorre de imediato para um usuário público), o serviço **Conteúdo** passa a indexar os pings adequados para a mesa principal. Um usuário que acessa sua mesa pode ver os pings de um usuário que ele segue e, então, pode curtir ou dar pong -- funcionalidades de responsabilidade do serviço **Curtir + Pongar**. Por fim, caso haja alguma de tais interações, o serviço **Notificação** pode então informar ao dono do ping de tais ocorrências.

## Complementos

A imagem destaca a área central do CQRS, envolvendo **Ping** e **Conteúdo**. É importante destacar que este é um caso de CQRS não-trivial, isto é, a responsabilidade de _command_ está presente em diversos serviços, com destaque neste fluxo para **Ping**, **Curtir + Pongar** e **Seguir + Amigos**. Neste caso, a responsabilidade de _query_ está sob o serviço **Conteúdo**.

Com efeito, um outro ciclo não-trivial de CQRS está presente neste fluxo. Considerando a responsabilidade de _query_ agora sob o serviço **Notificação**, e a de _command_ distribuída entre **Ping**, **Curtir + Pongar** e **Seguir + Amigos**.

> obs: o destaque aplicado à imagem visa apenas trazer de forma visualmente simples o principal fluxo de CQRS deste cenário. É importante, porém, reforçar que os serviços podem desempenhar diversos papéis, a depender do contexto. A exemplo disso, vide **Notificação** que, no primeiro CQRS não desempenha papel algum, enquanto no segundo é justamente o responsável pelo _query_.

[home]: ../
[dseqviewpings]: ./dseqview-pings.md
[msviewpings]: ./msview-pings.png
