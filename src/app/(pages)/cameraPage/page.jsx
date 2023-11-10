"use client";
import React, { useState, useRef, useEffect } from 'react';

function ObjectDetectionPage() {
  const [isDetectionStarted, setIsDetectionStarted] = useState(false);
  const videoRef = useRef(null);
  const detectionsCanvasRef = useRef(null);
  const ctxRef = useRef(null);

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
    // Fazer uma solicitação para iniciar a detecção no servidor Python
    fetch('http://localhost:8080/start_detection')
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'Detection started') {
          setIsDetectionStarted(true);
        }
      })
      .catch((error) => {
        console.error('Erro ao iniciar a detecção:', error);
      });
  };

  const handleStopDetection = () => {
    // Fazer uma solicitação para parar a detecção no servidor Python
    fetch('http://localhost:8080/stop_detection')
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'Detection stopped') {
          setIsDetectionStarted(false);
        }
      })
      .catch((error) => {
        console.error('Erro ao parar a detecção:', error);
      });
  };

  return (
    <div className='camera-page'>
      <h1 className='titulo-camera'>Detecção de Objetos</h1>
      <button
        id="startButton"
        onClick={handleStartDetection}
        disabled={isDetectionStarted}
        style={{ display: isDetectionStarted ? 'none' : 'block' }}
      >
        Iniciar Detecção
      </button>
      <button
        id="stopButton"
        onClick={handleStopDetection}
        disabled={!isDetectionStarted}
        style={{ display: isDetectionStarted ? 'block' : 'none' }}
      >
        Parar Detecção
      </button>
      <div className="webcam">
        <img ref={videoRef} src="http://localhost:8080/video_feed" alt="Detecção de objetos" className='deteccao'/>
        <canvas ref={detectionsCanvasRef}></canvas>
      </div>
      
    </div>
  );
}

export default ObjectDetectionPage;
