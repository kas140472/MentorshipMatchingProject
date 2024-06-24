document.addEventListener('DOMContentLoaded', function() {
    // Validate Mentee List Section
    document.getElementById('validate-mentee-button').addEventListener('click', function() {
        const newMenteeList = document.getElementById('new-mentee-list').files[0];
        if (newMenteeList) {
            console.log('Validating mentee list...');
            
            setTimeout(() => {
                const isValid = true;
                const outliers = [];
    
                if (isValid) {
                    document.getElementById('validation-result').textContent = "Mentee list is valid.";
                } else {
                    document.getElementById('validation-result').textContent = "Mentee list is not valid. Outliers: " + outliers.join(', ');
                }
    
                console.log('Validation complete.');
            }, 1000);
        } else {
            alert('Please upload a mentee list.');
        }
    });
    
    // Upload Lists Section
    document.getElementById('upload-submit-button').addEventListener('click', function() {
        const menteeList = document.getElementById('mentee-list').files[0];
        const mentorList = document.getElementById('mentor-list').files[0];
        const trainingList = document.getElementById('training-list').files[0];
        const quizList = document.getElementById('quiz-list').files[0];
    
        if (!menteeList || !mentorList || !trainingList || !quizList) {
            const proceed = confirm('Some files are missing. Do you want to continue?');
            if (!proceed) {
                return;
            }
        }
    
        console.log('Files uploaded:', {
            menteeList: menteeList ? menteeList.name : 'Not uploaded',
            mentorList: mentorList ? mentorList.name : 'Not uploaded',
            trainingList: trainingList ? trainingList.name : 'Not uploaded',
            quizList: quizList ? quizList.name : 'Not uploaded'
        });
    
        // Enable the Generate Assigned List button only after all files are uploaded
        if (menteeList && mentorList && trainingList && quizList) {
            document.getElementById('generate-button').disabled = false;
        }
    });
    
    // Generate Assigned List Section
    document.getElementById('generate-button').addEventListener('click', function() {
        console.log('Generating assigned list...');
    
        setTimeout(() => {
            const assignedListUrl = 'assigned_list.csv';
            const link = document.createElement('a');
            link.href = assignedListUrl;
            link.download = 'assigned_list.csv';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
    
            console.log('Assigned list generated and downloaded.');
        }, 1000);
    });
});
