<<<<<<< HEAD
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-box').value;
    // Backend call to fetch student details
    fetchStudentDetails(query);
});

function fetchStudentDetails(query) {
    // Dummy data
    const studentDetails = {
        '123': 'Student Name: John Doe\nID: 123\nMentor: Jane Smith',
        '124': 'Student Name: Alice Johnson\nID: 124\nMentor: Robert Brown'
    };

    const details = studentDetails[query] || 'No student found';
    document.getElementById('student-details').textContent = details;
}
=======
document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-box').value;
    // Backend call to fetch student details
    fetchStudentDetails(query);
});

function fetchStudentDetails(query) {
    // Dummy data
    const studentDetails = {
        '123': 'Student Name: John Doe\nID: 123\nMentor: Jane Smith',
        '124': 'Student Name: Alice Johnson\nID: 124\nMentor: Robert Brown'
    };

    const details = studentDetails[query] || 'No student found';
    document.getElementById('student-details').textContent = details;
}
>>>>>>> origin/main
