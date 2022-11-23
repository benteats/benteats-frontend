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
                    docker build -t lucasnishimoto05/bentsfront:$RELEASE_NOTES  
                    docker build -t lucasnishimoto05/bentsfront:$RELEASE_NOTES  
                    docker push lucasnishimoto05/bentsfront:$RELEASE_NOTES    
                """
            }
            
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                
                sh """
                    ssh root@44.206.2.154  docker pull lucasnishimoto05/bentsfront:$RELEASE_NOTES
                    ssh root@44.207.103.66 docker rm -f bents-frontend 
                    ssh root@44.206.2.154 docker run -dit  --restart always --name bents-frontend -p 80:80 lucasnishimoto05/bentsfront:$RELEASE_NOTES
                    ssh root@44.207.103.66 docker run -dit  --restart always --name bents-frontend -p 80:80 lucasnishimoto05/bentsfront:$RELEASE_NOTES
                """
            }
        }
    }
}
