pipeline {
    agent any
    environment {
        RELEASE_NOTES = "$GIT_COMMIT"
    }
    stages {
        stage('Update') {
            steps {
                echo 'Updanting project...'
                sh('bash $HOME/update.sh')
            }
        }
        stage('Build') {
            steps {
                echo 'Building new image..'
                sh """
                    docker build -t front:$RELEASE_NOTES  
                """
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh("docker rm -f bents-frontend")
                sh """
                    docker run -dit  --restart always \ 
                    --name bents-frontend -p 80:80 front:$RELEASE_NOTES
                """
            }
        }
    }
}
