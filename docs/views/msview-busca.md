# Busca - Visão de Microsserviços

[[TOC]]

Esta visão é um destaque com relação à visão panorâmica apresentada [aqui][home].

![Busca - Visão de Microsserviços][msviewbusca]

## Introdução

O serviço **Busca** recebe cada ping criado via evento emitido pelo serviço **Ping**.
Com isto, Busca faz uma indexação que dá suporte às suas principais funcionalidades:

1. geração das TagNow (TgN), listas das hashtags mais utilizadas do momento:
    - TgN World: uma lista de abrangência global
    - TgN Here: uma filtragem por localização, permitindo usuários mobile a selecionar "nacional", "estadual" ou "municipal"
2. disparos de buscas por pings de uma determinada hashtag

## Complementos

É interessante destacar que há a aplicação do padrão **CQRS** neste relação. Veja também a [sua análise de trade-offs][cqrs].

[home]: ../
[msviewbusca]: ./msview-busca.png
[cqrs]: ../extras/cqrs_tradeoffs.md
