function loadComponent(url, elementId) {
    console.log('Loading component:', url, 'into', elementId);
    
    $.ajax({
        url: url,
        method: 'GET',
        success: function(data) {
            console.log('Component loaded successfully');
            $('#' + elementId).html(data);
        },
        error: function(xhr, status, error) {
            console.error('Error loading component:', error);
            console.error('Status:', status);
            console.error('Response:', xhr.responseText);
            $('#' + elementId).html('Error loading navigation');
        }
    });
} 