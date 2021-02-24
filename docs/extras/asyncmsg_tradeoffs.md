# Asynchronous Messaging

[[TOC]]

## Descrição do Padrão

O padrão será apresentado em duas etapas: **O Problema** no qual seu uso faz sentido, e **A Solução** que o padrão propõe para o resolver.

### O Problema

Em um sistema distribuído, as partes precisam se comunicar. A adoção de um modelo síncrono de comunicação gera um forte acoplamento entre as partes.

### A Solução

Adote um modelo assíncrono de comunicação entre as partes do sistema. Um estilo de comunicação assíncrona é o _publish/subscribe_: uma parte publica uma mensagem em um canal que outras partes interessadas podem estar inscritas.

## Análise de Trade-offs

:heavy_minus_sign: torna a comunicação entre partes mais complexa

:heavy_plus_sign: diminui o acoplamento entre as partes

:heavy_minus_sign: suporta apenas consistência eventual de dados

:heavy_plus_sign: com partes menos acopladas, pode haver melhoras de desempenho

