pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    dockerImage = docker.build("travel-app:latest")
                }
            }
        }
        stage('Run Container') {
            steps {
                script {
                    // Останавливаем и удаляем предыдущий контейнер, если он существует
                    sh 'docker stop travel-app-container || true'
                    sh 'docker rm travel-app-container || true'
                    // Запускаем новый контейнер
                    sh 'docker run -d --name travel-app-container -p 3000:3000 travel-app:latest'
                }
            }
        }
        stage('Test Endpoint') {
            steps {
                script {
                    // Даём контейнеру время на запуск
                    sleep 5
                    // Проверяем endpoint
                    sh 'curl --fail http://localhost:3000/travel'
                }
            }
        }
    }
    post {
        always {
            // Очищаем контейнер после выполнения
            sh 'docker stop travel-app-container || true'
            sh 'docker rm travel-app-container || true'
        }
    }
}
