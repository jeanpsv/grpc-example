$LOAD_PATH.unshift(File.expand_path(File.dirname(__FILE__)))

require 'grpc'
require 'greeter_services_pb'

class GreeterService < Greeter::GreeterService::Service

  def hello(request, _call)
    Greeter::Greeting.new(message: "Hello #{request.name}")
  end
end

def main
  host = ENV["SERVER_HOST"]
  port = ENV["SERVER_PORT"]
  server = GRPC::RpcServer.new
  server.add_http2_port("#{host}:#{port}", :this_port_is_insecure)
  server.handle(GreeterService.new)
  p "grpc server running"
  server.run_till_terminated
end

main()
