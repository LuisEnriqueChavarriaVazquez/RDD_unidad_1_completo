// Añade un evento click al botón que iniciará la captura de pantalla
document.getElementById("boton-captura-pantalla").addEventListener("click", function() {

    // Usa la API de captura de pantalla para tomar una captura de toda la página
    navigator.mediaDevices.getDisplayMedia({video: {mediaSource: "screen"}})
      .then(function(stream) {
        // Crea un elemento de video y establece la fuente del video
        var video = document.createElement("video");
        video.srcObject = stream;
        document.body.appendChild(video);
  
        // Espera a que el video esté cargado y listo para reproducir
        video.onloadedmetadata = function(e) {
          video.play();
  
          // Crea un canvas con el mismo tamaño que la pantalla y dibuja el contenido del video en el canvas
          var canvas = document.createElement("canvas");
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          var ctx = canvas.getContext("2d");
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
  
          // Recorta la imagen para obtener solo la parte que cubre 100vh
          var recorte = canvas.toDataURL("image/png");
          var img = new Image();
          img.onload = function() {
            var canvas_recorte = document.createElement("canvas");
            canvas_recorte.width = img.width;
            canvas_recorte.height = window.innerHeight;
            var ctx_recorte = canvas_recorte.getContext("2d");
            ctx_recorte.drawImage(img, 0, -(canvas.height - window.innerHeight), img.width, canvas.height);
  
            // Descarga la imagen resultante
            var link = document.createElement("a");
            link.download = "captura-pantalla.png";
            link.href = canvas_recorte.toDataURL("image/png");
            link.click();
  
            // Limpia los recursos utilizados
            video.pause();
            video.srcObject = null;
            stream.getTracks()[0].stop();
            document.body.removeChild(video);
          };
          img.src = recorte;
        };
      })
      .catch(function(error) {
        console.error("Error al tomar la captura de pantalla:", error);
      });
  });
  