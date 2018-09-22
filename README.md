# grpc-example
gRPC example


### Usage

I've implemented some docker-compose file to make easy run tests.
All docker-compose files have all clients written in NodeJS, Python, Ruby and Elixir.

To run the gRPC server in a specific language, choose between the docker-compose files:

1. `docker-compose-nodejs-server.yaml` - gRPC server implemented in NodeJS language
2. `docker-compose-python-server.yaml` - gRPC server implemented in Python language
3. `docker-compose-ruby-server.yaml` - gRPC server implemented in Ruby language
4. `docker-compose-elixir-server.yaml` - gRPC server implemented in Elixir language

To run the gRPC server use:
```bash
$ docker-compose -f ${docker-compose-file} up server
```

To run the grPC client use:
```bash
$ docker-compose -f ${docker-compose-file} up ${client}
```

`${docker-compose-file}` must be `docker-compose-nodejs-server.yaml`, `docker-compose-python-server.yaml`, `docker-compose-ruby-server.yaml` or `docker-compose-elixir-server.yaml`.

`${client}` must be `nodejs`, `python`, `ruby` or `elixir`.

### Protocol Buffer

Simple protobuf definition in `protobufs/greeter.proto`.


### gRPC NodeJS Server

Server implementation of `protobufs/greeter.proto` in `nodejs/server.js`.


### gRPC Clients

#### NodeJS Client

Client implementation in `nodejs/client.js`.


#### Python Client

To generate the Python stub methods I've installed `pip install grpcio grpcio-tools` and ran `python python/generate_pb.py`.
See python client implementation in `python/client.py`.


#### Ruby Client

To generate the Ruby stub methods I've installed `gem install grpc grpc-tools` and ran `grpc_tools_ruby_protoc -I ../protobufs --ruby_out=. --grpc_out=. ../protobufs/greeter.proto`.
See ruby client implementation in `ruby/client.rb`.


#### Elixir Client

Client implementation in `elixir/priv/client.exs`.
