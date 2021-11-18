# Docker Manager

API Rest construída em Node.js que interage com a Docker Engine API de um host.

**Link do youtube com a demo:** []()

## Ambiente

Para executar esse backend em seu ambiente local é necessário:

* Instalar o [Node.js](https://nodejs.org/en/download/)
* Instalar o [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable)

Para gerenciar containers em um ubuntu server é necessário:

* Instalar a [Docker Engine CE](https://docs.docker.com/engine/install/ubuntu/)
* Habilitar a Docker Engine API em seu ambiente (vide passos abaixo)

## Habilitando a Docker Engine API

Para que seja possível consumir a API do Docker no ubuntu server é necessário:

1. Em um terminal, abrir o arquivo `/lib/systemd/system/docker.service`:

```sh
~ sudo vim /lib/systemd/system/docker.service
```

2. Procurar pela instrução `ExecStart` e habilitar o protocolo tcp na porta de sua escolha:

```vim
ExecStart=/usr/bin/dockerd -H fd:// -H=tcp://0.0.0.0:5555
```

No caso, foi habilitada a porta `5555`.

3. Após habilitar o protocolo tcp e salvar o arquivo, restartar o daemon:

```sh
~ sudo systemctl daemon-reload
```

4. Por fim, reiniciar o serviço do docker:

```sh
~ sudo service docker restart
```

## Executando a aplicação

Tendo um ubuntu server e sua máquina devidamente configurados:

1. Faça um clone deste repositório 
2. Entre na pasta clonada e renomeie o arquivo `.env.example` para `.env` somente
3. Substitua o valor das variáveis `DOCKER_HOST_IP=` pelo IP da máquina que contém o docker engine (ubuntu server) e `DOCKER_HOST_PORT=` pela porta tcp habilitada anteriormente (em nosso exemplo, a porta será 5555)
4. Ainda na pasta raíz do projeto, execute o comando `yarn dev` para iniciar o servidor backend em sua máquina local (o processo começará a executar no endereço `http://localhost:3333`)
5. Abra o Postman e importe a collection presente na raiz deste repositorio
6. Consuma a API com as requests já criadas em suas respectivas pastas