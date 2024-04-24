document.getElementById('search-submit').addEventListener('click', function() {
    const searchInput = document.getElementById('search-input').value;
    if (searchInput) {
        window.location.href = 'lorem-ipsum.html';
    }
});

const generatePdfButton = document.getElementById('generate-pdf');

generatePdfButton.addEventListener('click', () => {
  const pdfContent = document.getElementById('pdf-content').innerHTML;

  const opt = {
    margin: 1,
    filename: 'lorem-ipsum.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().from(pdfContent).set(opt).save();
});

const cardButtons = document.querySelectorAll('.card-button');

cardButtons.forEach((button) => {
  button.addEventListener('click', () => {
    alert('Thank you for your purchase!');
  });
});