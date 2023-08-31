document.addEventListener('DOMContentLoaded', function() {
    
    const bookReferences = document.querySelectorAll('.book-reference');
  
    bookReferences.forEach(function(reference) {
        reference.addEventListener('mouseenter', showBookCover);
        reference.addEventListener('mouseleave', hideBookCover);
    });

  
    function showBookCover(event) {
      const reference = event.target;

      const imageUrl = reference.dataset.imageUrl;
  
      const bookCover = document.createElement('img');
      bookCover.classList.add('book-cover');
      bookCover.src = imageUrl;
  
      reference.appendChild(bookCover);
    }
  
    function hideBookCover(event) {
      const reference = event.target;
      const bookCover = reference.querySelector('.book-cover');
      bookCover.remove();
    }
  });

