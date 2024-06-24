document.getElementById('generate-report').addEventListener('click', function() {
    // Backend call to generate report
    generateReport();
});

function generateReport() {
    const summary = 'Summary: 50 mentors, 200 mentees, 150 successful matches.';
    document.getElementById('report-summary').textContent = summary;
    document.getElementById('download-full-report').style.display = 'block';
}

document.getElementById('download-full-report').addEventListener('click', function() {
    // Backend call to download the full report
    alert('Full report downloaded.');
    const link = document.createElement('a');
    link.href = 'full_report.pdf';
    link.download = 'full_report.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
