FROM golang:1.15.2-alpine

EXPOSE 8081

WORKDIR /go/src/app
# RUN apk add --update alpine-sdk

RUN apk --no-cache add curl git && \
    curl https://raw.githubusercontent.com/golang/dep/master/install.sh | sh

COPY . .

RUN dep ensure
RUN dep ensure -update golang.org/x/sys

RUN go build -o auth-api

CMD /go/src/app/auth-api

