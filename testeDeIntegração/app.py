from fastapi import FastAPI, HTTPException, Response
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
import cv2
import threading
import time
import io

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_methods=["*"],
    allow_headers=["*"],
    allow_credentials=True,
    allow_origins=["*"]
)

COLORS = [(0, 255, 255), (255, 255, 0), (0, 255, 0), (255, 0, 0)]

class_names = []
with open("coco.names", "r") as f:
    class_names = [cname.strip() for cname in f.readlines()]

video_capture = None
model = None
detection_running = False

def start_detection():
    global detection_running
    while detection_running:
        if video_capture.isOpened():
            validacao, frame = video_capture.read()
            if validacao:
                start = time.time()
                classes, scores, boxes = model.detect(frame, confThreshold=0.05, nmsThreshold=0.1)
                end = time.time()

                for (classid, score, box) in zip(classes, scores, boxes):
                    classid = int(classid)
                    color = COLORS[classid % len(COLORS)]
                    label = f"{class_names[classid]} : {score}"
                    cv2.rectangle(frame, box, color, 2)
                    cv2.putText(frame, label, (box[0], box[1] - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)

                _, buffer = cv2.imencode('.jpg', frame)
                yield (b'--frame\r\n'
                       b'Content-Type: image/jpeg\r\n\r\n' + buffer.tobytes() + b'\r\n')

def stop_detection():
    global detection_running
    detection_running = False
    if video_capture.isOpened():
        video_capture.release()

@app.get('/')
def read_root():
    return {"message": "Welcome to FastAPI"}

@app.get('/start_detection')
def start_detection_route():
    global video_capture, model, detection_running
    if not detection_running:
        video_capture = cv2.VideoCapture("bicicleta-video.mp4")
        net = cv2.dnn.readNet("yoloV4-tiny.weights", "yoloV4-tiny.cfg")
        model = cv2.dnn_DetectionModel(net)
        model.setInputParams(size=(416, 416), scale=1/255)
        detection_running = True
        t = threading.Thread(target=start_detection)
        t.daemon = True
        t.start()
    return {"status": "Detection started"}

@app.get('/stop_detection')
def stop_detection_route():
    stop_detection()
    return {"status": "Detection stopped"}

@app.get('/video_feed')
async def video_feed():
    return StreamingResponse(generate_frames(), media_type="multipart/x-mixed-replace; boundary=frame")

def generate_frames():
    global detection_running
    while detection_running:
        if video_capture.isOpened():
            validacao, frame = video_capture.read()
            if validacao:
                start = time.time()
                classes, scores, boxes = model.detect(frame, confThreshold=0.05, nmsThreshold=0.1)
                end = time.time()

                for (classid, score, box) in zip(classes, scores, boxes):
                    classid = int(classid)
                    color = COLORS[classid % len(COLORS)]
                    label = f"{class_names[classid]} : {score}"
                    cv2.rectangle(frame, box, color, 2)
                    cv2.putText(frame, label, (box[0], box[1] - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.5, color, 2)

                _, buffer = cv2.imencode('.jpg', frame)
                yield (b'--frame\r\n'
                       b'Content-Type: image/jpeg\r\n\r\n' + buffer.tobytes() + b'\r\n')

if __name__ == '__main__':
    import uvicorn
    uvicorn.run(app, host='127.0.0.1', port=8000)

