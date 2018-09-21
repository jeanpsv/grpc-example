const grpc = require("grpc")
const protoLoader = require("@grpc/proto-loader")

const protoPath = require("path").join(__dirname, "../", "protobufs")

const packageDefinition = protoLoader.loadSync(`${protoPath}/greeter.proto`, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
})
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition)

const GreeterService = new protoDescriptor.greeter.GreeterService(`${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`, grpc.credentials.createInsecure())

GreeterService.hello({
	name: "Jean Vasconcelos"
}, (error, response) => {
  if (error) {
    console.log(error)
    return
  }

  console.log(response)
})
