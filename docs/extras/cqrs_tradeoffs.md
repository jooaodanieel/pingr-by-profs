# CQRS

[[TOC]]

## Descrição do Padrão

O padrão será apresentado em duas etapas: **O Problema** no qual seu uso faz sentido, e **A Solução** que o padrão propõe para o resolver.

### O Problema

Em um sistema distribuído, em particular com a gestão de dados descentralizada, existe uma dificuldade em consultar dados provenientes de diversas partes. Paralelamente a isso, as taxas de leitura e escrita de um tipo de dado podem demandar soluções distintas, em termos de performance e estruturas de dados.

### A Solução

Crie um serviço dedicado à operação de consulta. Este serviço deve acompanhar as alterações feitas em outras partes do sistema para a manutenção da consistência.

## Análise de Trade-offs

  - [+] é possível adotar estruturas de dados diferentes otimizadas para as operações de inserção e consulta de dados
  - [-] é necessário fazer replicação de dados
  - [+] permite independência de escalabilidade entre inserção e consulta
  - [-] implica em consistência eventual de dados para aqueles subconjunto do domínio
  - [+] melhora a performance de consultas que envolvem diferentes partes do sistema
