const grpc = require("grpc")

const proto = grpc.load("protobufs/greeter.proto")

const server = new grpc.Server()

server.addProtoService(proto.greeter.GreeterService.service, {
  hello(call, callback) {
    console.log(call)
    callback(null, {
      message: `Hello ${call.request.name}`
    })
  }
})

server.bind(`${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`, grpc.ServerCredentials.createInsecure())

server.start()

console.log("grpc server running")
