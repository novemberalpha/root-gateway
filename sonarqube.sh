#!/usr/bin/env zsh

sonar-scanner \
  -Dsonar.projectKey=Microservice-API-Gateway \
  -Dsonar.sources=src \
  -Dsonar.tests=tests \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.login=6a4c761e62879f343b0c66fac8db38e4f42eba59 \
  -Dsonar.javascript.lcov.reportPaths=coverage/lcov.info \
  -Dsonar.testExecutionReportPaths=coverage/sonar.xml \
  -Dsonar.verbose=true
