pipeline {
    agent { label 'Agent' }  // tumhara agent label

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/TUMHARA_USERNAME/TUMHARA_REPO.git'
            }
        }

        stage('Deploy to Nginx') {
            steps {
                sh '''
                    # Purani files delete karo
                    rm -rf /var/www/html/*

                    # Nayi files copy karo
                    cp -r * /var/www/html/

                    # Nginx restart karo
                    sudo systemctl restart nginx
                '''
            }
        }
    }

    post {
        success {
            echo '✅ Portfolio successfully deployed!'
        }
        failure {
            echo '❌ Deployment failed!'
        }
    }
}
