const confirmarBtn = document.getElementById('confirmar-btn');
confirmarBtn.addEventListener('click', function() {
    $('#exampleModal').modal('show');

    setTimeout(function() {
        $('#exampleModal').modal('hide');
        location.href = "finaliza-compra.html";        
    }, 5000);
});         