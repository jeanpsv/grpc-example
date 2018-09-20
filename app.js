const grpc = require("grpc")
const protoLoader = require("@grpc/proto-loader")

const protoDescriptor = grpc.loadPackageDefinition(
  protoLoader.loadSync("protobufs/greeter.proto", {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  })
)

const server = new grpc.Server()

server.addService(protoDescriptor.greeter.GreeterService.service, {
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
