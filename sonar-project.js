import scanner from 'sonarqube-scanner';
scanner(
  {
    serverUrl:  'http://localhost:9000',
    token: '6a4c761e62879f343b0c66fac8db38e4f42eba59',
    options : {
      'sonar.projectName': 'Microservice-API-Gateway',
      'sonar.projectDescription': 'Microservice-API-Gateway',
      'sonar.sources':  'src',
      'sonar.tests':  'tests',
      'sonar.test.inclusions':  'tests/**/*.test.js,tests/**/*.test.jsx',
      'sonar.javascript.lcov.reportPaths':  'coverage/lcov.info',
      'sonar.testExecutionReportPaths':  'coverage/sonar.xml',
    }
  }, () => {});
