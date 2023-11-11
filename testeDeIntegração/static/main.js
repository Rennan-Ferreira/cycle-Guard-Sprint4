document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const stopButton = document.getElementById("stopButton");
    const video = document.getElementById("video");
    const detectionsCanvas = document.getElementById("detectionsCanvas");
    const ctx = detectionsCanvas.getContext("2d");

    video.addEventListener("play", () => {
        // Defina um loop para processar quadros e desenhar detecções
        const drawDetections = () => {
            if (!video.paused && !video.ended) {
                ctx.clearRect(0, 0, detectionsCanvas.width, detectionsCanvas.height);
                ctx.drawImage(video, 0, 0, detectionsCanvas.width, detectionsCanvas.height);
                requestAnimationFrame(drawDetections);
            }
        };
    
        // Comece a desenhar detecções
        drawDetections();
    });

    startButton.addEventListener("click", function () {
        startButton.disabled = true;
        fetch("/start_detection")
            .then(response => response.json())
            .then(data => {
                if (data.status === "Detection started") {
                    startButton.style.display = "none";
                    stopButton.style.display = "block";
                    video.src = "/video_feed"; // Iniciar o vídeo da webcam com detecções
                }
            });
    });

    stopButton.addEventListener("click", function () {
        stopButton.disabled = true;
        fetch("/stop_detection")
            .then(response => response.json())
            .then(data => {
                if (data.status === "Detection stopped") {
                    startButton.style.display = "block";
                    stopButton.style.display = "none";
                    video.src = "";
                }
            });
    });
});
