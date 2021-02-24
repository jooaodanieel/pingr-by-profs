# Seguir - Visão de Microsserviços

[[TOC]]

Esta visão é um destaque com relação à visão panorâmica apresentada [aqui][home].

![Seguir - Visão de Microsserviços][msviewseguir]

## Introdução

Esta visão mostra a relação dos serviços que dão suporte à relação entre usuários que se seguem. Através do serviço **Autenticação** que atua como [API Gateway][apigateway], um usuário cria sua conta, responsabilidade do serviço **Usuário**. Tal ocorrido é informado ao **Seguir + Amigos**, que indexa o novo usuário como disponível para seguir e para ser seguido. Um usuário pode solicitar seguir outro e, indepedentemente da privacidade, ao finalizar o processo de resolução -- aceite, aceite automático ou rejeite --, o serviço **Notificação** é informado. Caso o usuário seguido seja privado, a simples solicitação gera uma mensagem ao **Notificação**, como marca do início do processo interativo de resolução da solicitação.

## Complementos

Entre os serviços **Usuário**, **Seguir + Amigos** e **Notificação** existe um ciclo de CQRS não-trivial, apesar de bastante simples. Confira a [análise de trade-offs deste padrão][cqrs].

[home]: ../
[msviewseguir]: ./msview-seguir.png
[apigateway]: ../extras/apigateway_tradeoffs.md
[cqrs]: ../extras/cqrs_tradeoffs.md
