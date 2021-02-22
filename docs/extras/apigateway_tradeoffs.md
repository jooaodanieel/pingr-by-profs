# API Gateway

[[TOC]]

## Descrição do Padrão

O padrão será apresentado em duas etapas: **O Problema** no qual seu uso faz sentido, e **A Solução** que o padrão propõe para o resolver.

### O Problema

Ao adotar uma arquitetura distribuída para o sistema, cada uma de suas partes tem seu próprio endereço de acesso. Pode-se considerar uma atribuição inadequada de responsabilidade caso o cliente externo precise saber dos endereços de cada uma das partes. Vale ressaltar que, esse cenário de sistema distribuído é caraterizado pelo dinamismo, tanto de partes mudando de endereço, quanto de surgimento e remoção de partes, o que acentua o problema.

### A Solução

Crie um único ponto de acesso ao sistema, por posicionar publicamente e à frente de todo o sistema um serviço que assuma a responsabilidade de conhecer a distribuição das demais partes e fazer o redirecionamento das requisições. Deste modo, os clientes externos precisam apenas conhecer este serviço.

## Análise de Trade-offs

- [+] cria uma abstração da divisão interna
- [-] a comunicação passa a ter um passo intermediário entre cliente e serviço
- [+] ajuda no processo de migração para novos particionamentos do sistema
- [-] pode ser um ponto único de falha
- [+] destaca-se como um dos principais agentes de segurança no sistema

