FROM elixir:1.7

WORKDIR /app
COPY . .

RUN apt-get update && \
  apt-get install autoconf automake libtool curl make g++ unzip -y && \
  git clone https://github.com/protocolbuffers/protobuf.git && \
  cd protobuf && \
  git submodule update --init --recursive && \
  ./autogen.sh && \
  ./configure && \
  make && \
  make check && \
  make install && \
  ldconfig
