FROM golang:1.9-alpine

ENV ELASTIC_APM_SERVER_URL https://0918e23ed6fa4b729f3f2fad78814e99.apm.europe-west1.gcp.cloud.es.io:443

EXPOSE 8081

WORKDIR /go/src/app
RUN apk --no-cache add curl git && \
    curl https://raw.githubusercontent.com/golang/dep/master/install.sh | sh

COPY . .
RUN dep ensure

RUN go build -o auth-api

CMD /go/src/app/auth-api

