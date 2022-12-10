pipeline {
    agent any
    environment {
        dockerImage = "$BUILD_NUMBER"
    }
    stages{
        stage('Build docker image'){
            steps{
                script{
                    sh "docker build -t lucasnishimoto05/bentsfront:${dockerImage} ."
                }
            }
        }
        stage('Push image to Hub'){
            steps{
                script{
                    withCredentials([string(credentialsId: 'dockerhub-pwd', variable: 'dockerhubpwd')]) {
                        sh "docker login -u lucasnishimoto05 -p ${dockerhubpwd}"
                }
                    sh "docker push lucasnishimoto05/bentsfront:${dockerImage}"
                }
            }
        }
        stage('Deploy') {
                  steps {
                    echo 'Deploying....'
                    sh """
                        ssh root@44.206.2.154 docker rm -f bents-frontend 
                        ssh root@44.206.2.154 docker run -dit  --restart always --name bents-frontend -p 80:80 lucasnishimoto05/bentsfront:${dockerImage}
                        ssh root@44.207.103.66 docker rm -f bents-frontend 
                        ssh root@44.207.103.66 docker run -dit  --restart always --name bents-frontend -p 80:80 lucasnishimoto05/bentsfront:${dockerImage}
                    """
                }
            }
    }
}
