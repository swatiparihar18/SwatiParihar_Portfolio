pipeline {
    agent { label 'agent-1' }

    environment {
        DEPLOY_DIR = '/var/www/html'
        REPO_NAME  = 'SwatiParihar_Portfolio'
    }

    stages {

        stage('🔍 Checkout Code') {
            steps {
                echo "📥 Fetching latest code from GitHub..."
            }
        }

        stage('🧹 Clean Old Files') {
            steps {
                echo "🗑️ Removing old portfolio files..."
                sh '#!/usr/bin/bash\nsudo rm -rf ${DEPLOY_DIR}/*'
            }
        }

        stage('🚀 Deploy to Nginx') {
            steps {
                echo "📂 Copying new files to Nginx..."
                sh '#!/usr/bin/bash\ncp -r * ${DEPLOY_DIR}/'
            }
        }

        stage('🔄 Restart Nginx') {
            steps {
                echo "🔁 Restarting Nginx server..."
                sh '#!/usr/bin/bash\nsudo systemctl restart nginx'
            }
        }

        stage('✅ Verify Deployment') {
            steps {
                echo "🌐 Verifying Nginx is running..."
                sh '#!/usr/bin/bash\nsudo systemctl status nginx | grep "active (running)"'
            }
        }
    }

    post {
        success {
            echo """
            ================================
            ✅ DEPLOYMENT SUCCESSFUL! 🎉
            🌐 Portfolio is LIVE!
            ================================
            """
        }
        failure {
            echo """
            ================================
            ❌ DEPLOYMENT FAILED!
            📋 Check logs above for errors
            ================================
            """
        }
        always {
            echo "🏁 Pipeline execution completed!"
        }
    }
}
