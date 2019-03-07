FROM python:3.6-alpine

ENV ELASTIC_APM_SERVICE_NAME log-message-processor
ENV ELASTIC_APM_TRANSPORT_CLASS elasticapm.transport.http.AsyncTransport


WORKDIR /usr/src/app
RUN apk add --no-cache build-base
COPY requirements.txt .
RUN pip3 install -r requirements.txt

COPY main.py .

CMD ["python3","-u","main.py"]

