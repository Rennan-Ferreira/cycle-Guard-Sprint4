// export default function CaperaPage() {
//   return (
//     <div className='camera-page'>
//       <h1 className='titulo-camera'>Detecção de Objetos</h1>
//       <button
//         id="startButton"
//         onClick={"handleStartDetection"}
//         disabled={"isDetectionStarted"}
//         style={{ display: isDetectionStarted ? 'none' : 'block' }}
//       >
//         Iniciar Detecção
//       </button>
//       <button
//         id="stopButton"
//         onClick={handleStopDetection}
//         disabled={!isDetectionStarted}
//         style={{ display: isDetectionStarted ? 'block' : 'none' }}
//       >
//         Parar Detecção
//       </button>
//       <div className="webcam">
//         <img ref={videoRef} src="http://localhost:8080/video_feed" alt="Detecção de objetos" className='deteccao'/>
//         <canvas ref={detectionsCanvasRef}></canvas>
//       </div> 
//     </div>
//   )
// }
