import grpc
import greeter_pb2
import greeter_pb2_grpc

def main():

    with grpc.insecure_channel('server:50051') as channel:
        stub = greeter_pb2_grpc.GreeterServiceStub(channel)
        response = stub.Hello(greeter_pb2.Human(name='Jean Vasconcelos'))
    print("Greeter client received: " + response.message)

if __name__ == '__main__':
    main()
