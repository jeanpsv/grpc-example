const grpc = require("grpc")

const protoPath = require("path").join(__dirname, "../..", "protobufs")

const proto = grpc.load({
  root: protoPath,
  file: "greeter.proto"
})

const client = new proto.greeter.GreeterService(`${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`, grpc.credentials.createInsecure())

client.hello("Jean Vasconcelos", (error, response) => {
  if (error) {
    console.log(error)
    return
  }

  console.log(response)
})
