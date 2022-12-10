pipeline {
    agent any
        stages {
            stage('Build') {
                steps {
                    echo 'Building new image..'
                    sh """
                        docker build -t lucasnishimoto05/bentsfront:testeee12  .
                        docker push lucasnishimoto05/bentsfront:testeee12    
                    """
                }

            }
            stage('Deploy') {
                steps {
                    echo 'Deploying....'
                    sh """
                        ssh root@44.206.2.154 docker pull lucasnishimoto05/bentsfront:testeee12
                        ssh root@44.206.2.154 docker rm -f bents-frontend 
                        ssh root@44.206.2.154 docker run -dit  --restart always --name bents-frontend -p 80:80 lucasnishimoto05/bentsfront:testeee12
                        ssh root@44.207.103.66 docker pull lucasnishimoto05/bentsfront:testeee12
                        ssh root@44.207.103.66 docker rm -f bents-frontend 
                        ssh root@44.207.103.66 docker run -dit  --restart always --name bents-frontend -p 80:80 lucasnishimoto05/bentsfront:testeee12
                    """
                }
            }
        }
}
