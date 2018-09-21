from grpc.tools import protoc

protoc.main(
    (
        '',
        '--proto_path=../protobufs/',
        '--python_out=.',
        '--grpc_python_out=.',
        '../protobufs/greeter.proto'
    )
)
