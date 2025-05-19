pipeline{
    agent any

    stages {
        stage('initialling'){
            steps {
                sh 'npm i'
            }                  }
        }
        stage('building'){
            steps {
	        sh 'docker build -t express .'
                  }
            }
        }
         stage('tests'){
            steps {
                sh 'docker run -d -p 3000:3000 -name travel express'
                sh 'docker exec travel sh -c "npm test"'
            }
        }
    }
} 
