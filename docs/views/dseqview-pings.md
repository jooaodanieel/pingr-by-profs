# Conteúdo Público - Diagrama de Sequência

Esta visão é complementar à visão [Conteúdo Público - Visão de Microsserviços][msviewpings].

O diagrama mostra um conjunto de três sequências, denotadas pelos rótulos:
  1. "A começa a seguir B"
  2. "B posta um ping"
  3. "A acessa sua mesa principal"

![Pings - Diagrama de Sequência][dseqviewpings]

::: tip Obs
este diagrama é inspirado no Diagrama de Sequência da UML; eventuais alterações estão explicitadas pela legenda.
:::

Este conjunto representa as interações de um usuário "A", que passa a seguir um usuário _público_ "B". "A", então, ao acessar sua mesa principal, pode visualizar o ping mais recente de "B". Dentro da primeira sequência, podemos ver que uma das implicações é que "B" recebe uma notificação informando que agora "A" o está seguindo.

As interações entre um cliente externo e a aplicação são sempre feitas através do serviço **Autenticação**. Veja também a [análise de trade-offs do API Gateway][apigateway], padrão implementado por ele.

[msviewpings]: ./msview-pings.md
[dseqviewpings]: ./dseqview-pings.png
[apigateway]: ../extras/apigateway_tradeoffs.md
