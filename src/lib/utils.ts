import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const FAKE_HANDLERS = [
  {
    "device": "ASIO4ALL v2",
    "endpoints": [
      {
        "id": 0,
        "name": "ASIO4ALL v2 - DroidCam Audio 1, DroidCam Audio 2",
        "device": "ASIO4ALL v2",
        "channels": 2,
        "channelsNames": "DroidCam Audio 1, DroidCam Audio 2",
        "ip": "239.247.100.1"
      },
      {
        "id": 1,
        "name": "ASIO4ALL v2 - DroidCam Audio 1",
        "device": "ASIO4ALL v2",
        "channels": 1,
        "channelsNames": "DroidCam Audio 1",
        "ip": "239.247.100.2"
      },
      {
        "id": 2,
        "name": "ASIO4ALL v2 - DroidCam Audio 2",
        "device": "ASIO4ALL v2",
        "channels": 1,
        "channelsNames": "DroidCam Audio 2",
        "ip": "239.247.100.3"
      },
      {
        "id": 3,
        "name": "ASIO4ALL v2 - fifine Headset 1, fifine Headset 2",
        "device": "ASIO4ALL v2",
        "channels": 2,
        "channelsNames": "fifine Headset 1, fifine Headset 2",
        "ip": "239.247.100.4"
      },
      {
        "id": 4,
        "name": "ASIO4ALL v2 - fifine Headset 1",
        "device": "ASIO4ALL v2",
        "channels": 1,
        "channelsNames": "fifine Headset 1",
        "ip": "239.247.100.5"
      },
      {
        "id": 5,
        "name": "ASIO4ALL v2 - fifine Headset 2",
        "device": "ASIO4ALL v2",
        "channels": 1,
        "channelsNames": "fifine Headset 2",
        "ip": "239.247.100.6"
      },
      {
        "id": 6,
        "name": "ASIO4ALL v2 - Iriun Webcam Audio 1, Iriun Webcam Audio 2",
        "device": "ASIO4ALL v2",
        "channels": 2,
        "channelsNames": "Iriun Webcam Audio 1, Iriun Webcam Audio 2",
        "ip": "239.247.100.7"
      },
      {
        "id": 7,
        "name": "ASIO4ALL v2 - Iriun Webcam Audio 1",
        "device": "ASIO4ALL v2",
        "channels": 1,
        "channelsNames": "Iriun Webcam Audio 1",
        "ip": "239.247.100.8"
      },
      {
        "id": 8,
        "name": "ASIO4ALL v2 - Iriun Webcam Audio 2",
        "device": "ASIO4ALL v2",
        "channels": 1,
        "channelsNames": "Iriun Webcam Audio 2",
        "ip": "239.247.100.9"
      }
    ]
  },
  {
    "device": "ASIO4ALL v3",
    "endpoints": [
      {
        "id": 0,
        "name": "ASIO4ALL v3 - DroidCam Audio 1, DroidCam Audio 2",
        "device": "ASIO4ALL v3",
        "channels": 2,
        "channelsNames": "DroidCam Audio 1, DroidCam Audio 2",
        "ip": "239.247.100.1"
      },
      {
        "id": 1,
        "name": "ASIO4ALL v3 - DroidCam Audio 1",
        "device": "ASIO4ALL v3",
        "channels": 1,
        "channelsNames": "DroidCam Audio 1",
        "ip": "239.247.100.2"
      },
      {
        "id": 2,
        "name": "ASIO4ALL v3 - DroidCam Audio 2",
        "device": "ASIO4ALL v3",
        "channels": 1,
        "channelsNames": "DroidCam Audio 2",
        "ip": "239.247.100.3"
      },
      {
        "id": 3,
        "name": "ASIO4ALL v3 - fifine Headset 1, fifine Headset 2",
        "device": "ASIO4ALL v3",
        "channels": 2,
        "channelsNames": "fifine Headset 1, fifine Headset 2",
        "ip": "239.247.100.4"
      },
      {
        "id": 4,
        "name": "ASIO4ALL v3 - fifine Headset 1",
        "device": "ASIO4ALL v3",
        "channels": 1,
        "channelsNames": "fifine Headset 1",
        "ip": "239.247.100.5"
      },
      {
        "id": 5,
        "name": "ASIO4ALL v3 - fifine Headset 2",
        "device": "ASIO4ALL v3",
        "channels": 1,
        "channelsNames": "fifine Headset 2",
        "ip": "239.247.100.6"
      },
      {
        "id": 6,
        "name": "ASIO4ALL v3 - Iriun Webcam Audio 1, Iriun Webcam Audio 2",
        "device": "ASIO4ALL v3",
        "channels": 2,
        "channelsNames": "Iriun Webcam Audio 1, Iriun Webcam Audio 2",
        "ip": "239.247.100.7"
      },
      {
        "id": 7,
        "name": "ASIO4ALL v3 - Iriun Webcam Audio 1",
        "device": "ASIO4ALL v3",
        "channels": 1,
        "channelsNames": "Iriun Webcam Audio 1",
        "ip": "239.247.100.8"
      },
      {
        "id": 8,
        "name": "ASIO4ALL v3 - Iriun Webcam Audio 2",
        "device": "ASIO4ALL v3",
        "channels": 1,
        "channelsNames": "Iriun Webcam Audio 2",
        "ip": "239.247.100.9"
      }
    ]
  }
]