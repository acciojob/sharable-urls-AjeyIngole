// your code here
document.getElementById('urlForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting normally
            
            // Get values from the form inputs
            const name = document.getElementById('name').value;
            const year = document.getElementById('year').value;
            
            // Build the query string
            const queryString = `?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;
            
            // Update the URL in the h3 element
            const urlElement = document.getElementById('url');
            urlElement.textContent = `https://localhost:8080/${queryString}`;
        });
