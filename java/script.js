// Función para publicar un mensaje
function publicarMensaje() {
    // Obtén el texto que el usuario escribió
    var messageInput = document.getElementById('messageInput');
    var messageText = messageInput.value.trim();

    // Verifica que el mensaje no esté vacío
    if (messageText !== "") {
        // Crea el contenedor para el nuevo mensaje
        var post = document.createElement('div');
        post.classList.add('post');

        // Crea el título con el nombre de usuario ('Yo')
        var user = document.createElement('h3');
        user.innerHTML = '<i class="fas fa-user"></i> Yo';
        post.appendChild(user);

        // Crea el contenido del mensaje
        var message = document.createElement('p');
        message.textContent = messageText;
        post.appendChild(message);

        // Crea el botón de eliminar
        var deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn');
        deleteBtn.textContent = 'Eliminar';
        
        // Agrega el evento de eliminación
        deleteBtn.addEventListener('click', function() {
            post.remove();  // Elimina el post cuando se hace clic
        });

        post.appendChild(deleteBtn);

        // Agrega el nuevo post al contenedor de los posts
        var forumPosts = document.getElementById('forumPosts');
        forumPosts.appendChild(post);

        // Limpia el área de texto después de publicar el mensaje
        messageInput.value = '';
    } else {
        alert('Por favor escribe algo antes de publicar.');  // Muestra un mensaje si el área está vacía
    }
}
