# grpc-example
gRPC example


### Usage

1. `docker-compose -f docker-compose-nodejs-server up server` to start NodeJS gRPC Server
2. `docker-compose -f docker-compose-nodejs-server up nodejs` to make a call using NodeJS gRPC Client
3. `docker-compose -f docker-compose-nodejs-server up python` to make a call using Python gRPC Client
4. `docker-compose -f docker-compose-nodejs-server up ruby` to make a call using Ruby gRPC Client


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
