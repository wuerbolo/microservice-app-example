FROM openjdk:8-alpine

EXPOSE 8083
WORKDIR /usr/src/app


COPY pom.xml mvnw ./
COPY .mvn/ ./.mvn
RUN ./mvnw dependency:resolve

COPY . .
RUN ./mvnw install

CMD ["java", "-javaagent:./elastic-apm-agent-1.4.0.jar",  "-Delastic.apm.service_name=usersapi", "-Delastic.apm.application_packages=com.elgris.usersapi", "-Delastic.apm.server_urls=https://0918e23ed6fa4b729f3f2fad78814e99.apm.europe-west1.gcp.cloud.es.io:443", "-jar", "./target/users-api-0.0.1-SNAPSHOT.jar"]
