var APP_DATA = {
  "scenes": [
    {
      "id": "0-atrium",
      "name": "Atrium",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3745262064878645,
          "pitch": 0.01146719422813014,
          "rotation": 0,
          "target": "2-open-learning-zone"
        },
        {
          "yaw": 0.3809810495387005,
          "pitch": 0.017071176768325813,
          "rotation": 0,
          "target": "1-concentration-hive"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-concentration-hive",
      "name": "Concentration Hive",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6347733535511679,
          "pitch": 0.03843075500943982,
          "rotation": 0,
          "target": "2-open-learning-zone"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-open-learning-zone",
      "name": "Open learning Zone",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.490876375852066,
          "pitch": 0.0681923939704383,
          "rotation": 0,
          "target": "0-atrium"
        },
        {
          "yaw": 2.1420297744474004,
          "pitch": 0.059616639088456935,
          "rotation": 0,
          "target": "1-concentration-hive"
        },
        {
          "yaw": -0.9131676967400288,
          "pitch": 0.12362775701727813,
          "rotation": 0,
          "target": "3-classroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-classroom",
      "name": "Classroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5851008620053637,
          "pitch": -0.011429014462652987,
          "rotation": 0,
          "target": "2-open-learning-zone"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "School of the Future",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
