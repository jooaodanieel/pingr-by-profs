# Conteúdo Privativo - Visão de Microsserviços

[[TOC]]

Esta visão é um destaque com relação à visão panorâmica apresentada [aqui][home].

![Conteúdo Privativo - Visão de Microsserviços][msviewdps]

## Introdução

O serviço **Bate Papo** é informado sobre novos usuários e sobre a relação de seguidores a cada mudança ocorrida. Com isso, é capaz de dar suporte às mensagens privativas -- os _Direct Pings (DPs)_ --, de modo que alguém só possa mandar DPs se houver reciprocidade na ligação (seguir e ser seguido), por razões de privacidade.

## Complementos

Este é mais um cenário onde há uma implementação do padrão **CQRS**. Veja também a [sua análise de trade-offs][cqrs].

[home]: ../
[msviewdps]: ./msview-dps.png
[cqrs]: ../extras/cqrs_tradeoffs.md
