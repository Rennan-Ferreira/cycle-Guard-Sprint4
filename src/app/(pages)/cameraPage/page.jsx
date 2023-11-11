"use client";
import React, { useState, useRef, useEffect } from 'react';
import styles from '../../../styles/cameraPage.module.css'
const ObjectDetectionPage = () => {
  const [isDetectionStarted, setIsDetectionStarted] = useState(false);

  const videoRef = useRef(null);
  const detectionsCanvasRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const detectionsCanvas = detectionsCanvasRef.current;
    const ctx = detectionsCanvas.getContext('2d');

    video.addEventListener('play', () => {
      const drawDetections = () => {
        if (!video.paused && !video.ended) {
          ctx.clearRect(0, 0, detectionsCanvas.width, detectionsCanvas.height);
          ctx.drawImage(video, 0, 0, detectionsCanvas.width, detectionsCanvas.height);
          requestAnimationFrame(drawDetections);
        }
      };

      drawDetections();
    });
  }, []);

 
  const handleStartDetection = () => {

    fetch('http://localhost:8000/start_detection')
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'Detection started') {
          setIsDetectionStarted(true);
          window.location.reload();  // Recarregar a página
        }
      })
      .catch((error) => {
        console.error('Erro ao iniciar a detecção:', error);
      });
  };

  return (
    <div className={styles.cameraPage}>
      <h1 className={styles.tituloCamera}>Detecção de Objetos</h1>
      <button id="startButton" onClick={handleStartDetection} disabled={isDetectionStarted}  style={{ display: isDetectionStarted ? 'none' : 'block' }} className={styles.button}      >
        Iniciar Detecção
      </button>
      
      <div className={styles.webcam}>
        <img ref={videoRef} src="http://localhost:8000/video_feed" alt="Detecção de objetos" className={styles.deteccao}/>
        <canvas ref={detectionsCanvasRef}></canvas>
      </div>
    </div>
  );
}

export default ObjectDetectionPage;

