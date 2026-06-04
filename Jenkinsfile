pipeline {
    agent { label 'Agent' }
    
    options {
        skipDefaultCheckout(false)
    }

    stages {
        stage('Deploy to Nginx') {
            steps {
                sh '#!/usr/bin/bash\nsudo rm -rf /var/www/html/*'
                sh '#!/usr/bin/bash\ncp -r * /var/www/html/'
                sh '#!/usr/bin/bash\nsudo systemctl restart nginx'
            }
        }
    }

    post {
        success {
            echo '✅ Portfolio Live!'
        }
        failure {
            echo '❌ Deployment Failed!'
        }
    }
}
