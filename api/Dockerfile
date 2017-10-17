FROM golang:1.9.1

RUN mkdir /go/src/app
WORKDIR /go/src/app

RUN go get -v -u github.com/pilu/fresh
RUN curl https://glide.sh/get | sh
CMD glide install && fresh

EXPOSE 8080
