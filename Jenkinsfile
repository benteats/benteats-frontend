pipeline {
    agent any
    environment {
        COMMIT_HASH = sh(returnStdout: true, script: 'git rev-parse --short=4 HEAD').trim()
        BRANCH = "${env.GIT_BRANCH}"
        TAG = "${env.BRANCH}.${env.COMMIT_HASH}.${env.BUILD_NUMBER}".drop(15)
        IMG_TAG = "${env.BRANCH}.${env.COMMIT_HASH}.${env.BUILD_NUMBER}".drop(7)
        VERSION = "${env.TAG}"
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
                    docker build -t lucasnishimoto05/bentsfront:${env.IMG_TAG}  
                    docker build -t lucasnishimoto05/bentsfront:${env.IMG_TAG}  
                    docker push lucasnishimoto05/bentsfront:${env.IMG_TAG}    
                """
            }
            
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                
                sh """
                    ssh root@44.206.2.154  docker pull lucasnishimoto05/bentsfront:${env.IMG_TAG}
                    ssh root@44.207.103.66 docker rm -f bents-frontend 
                    ssh root@44.206.2.154 docker run -dit  --restart always --name bents-frontend -p 80:80 lucasnishimoto05/bentsfront:${env.IMG_TAG}
                    ssh root@44.207.103.66 docker run -dit  --restart always --name bents-frontend -p 80:80 lucasnishimoto05/bentsfront:${env.IMG_TAG}
                """
            }
        }
    }
}
