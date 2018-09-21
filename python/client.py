import os
import grpc
import greeter_pb2
import greeter_pb2_grpc

def main():
    host = os.environ.get('SERVER_HOST')
    port = os.environ.get('SERVER_PORT')
    with grpc.insecure_channel("{0}:{1}".format(host, port)) as channel:
        stub = greeter_pb2_grpc.GreeterServiceStub(channel)
        response = stub.Hello(greeter_pb2.Human(name='Jean Vasconcelos'))
    print(response)

if __name__ == '__main__':
    main()
