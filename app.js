const grpc = require("grpc")

const proto = grpc.load("protobufs/greeter.proto")

const server = new grpc.Server()

server.addProtoService(proto.greeter.GreeterService.service, {
  hello(call, callback) {
    callback(`Hello ${call.request.name} !`)
  }
})

server.bind("0.0.0.0:50050", grpc.ServerCredentials.createInsecure())

server.start()

console.log("grpc server running")
