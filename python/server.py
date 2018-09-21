import grpc
import greeter_pb2_grpc
import greeter_pb2
import os
from concurrent import futures
import time

class GreeterServiceServicer(greeter_pb2_grpc.GreeterServiceServicer):

    def Hello(self, request, context):
        response = greeter_pb2.Greeting()
        response.message = "Hello {0}".format(request.name)
        return response

server = grpc.server(futures.ThreadPoolExecutor(max_workers=10))
greeter_pb2_grpc.add_GreeterServiceServicer_to_server(
    GreeterServiceServicer(), server)

host = os.environ.get('SERVER_HOST')
port = os.environ.get('SERVER_PORT')
server.add_insecure_port("{0}:{1}".format(host, port))
server.start()

try:
    while True:
        time.sleep(86400)
except KeyboardInterrupt:
    server.stop(0)
