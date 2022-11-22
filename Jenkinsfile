pipeline {
    agent any
    stages {
        stage('Update') {
            steps {
                echo 'Updanting project...'
                sh("bash update.sh")
            }
        }
        stage('Build') {
            steps {
                echo 'Building new image..'
                sh("docker build -t front . ")
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh("docker rm -f bents-frontend")
                sh("docker run -dit --name bents-frontend -p 80:80 front")
            }
        }
    }
}
