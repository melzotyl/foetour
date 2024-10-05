var APP_DATA = {
  "scenes": [
    {
      "id": "0-along-engineering-drive-1",
      "name": "Along Engineering Drive 1",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.2604861658010371,
        "pitch": 0.02889126197941394,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": 0.13715023767430878,
          "pitch": -0.2585110837460878,
          "rotation": 0.7853981633974483,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6741900832901884,
          "pitch": -0.014635807465314343,
          "title": "Faculty of Engineering",
          "text": "<p style=\"border: 0px; font-size: 15px; font-style: normal; font-weight: 400; margin-bottom: 1.6em; outline: 0px; vertical-align: baseline; color: rgb(33, 37, 41); font-family: &quot;Helvetica Neue&quot;, Helvetica, Arial, sans-serif; font-variant-ligatures: normal; font-variant-caps: normal;\"><br></p>"
        }
      ]
    },
    {
      "id": "1-engineering-auditorium-atrium",
      "name": "Engineering Auditorium Atrium",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.06399540590646069,
        "pitch": -0.002644830093107231,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": -3.107119544097463,
          "pitch": 0.03324458766850924,
          "rotation": 5.497787143782138,
          "target": "2-engineering-auditorium"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.4780123809785017,
          "pitch": -0.2834896639259057,
          "title": "Where be Spinnelli?",
          "text": "This no longer exists..."
        },
        {
          "yaw": 0.19789901533564347,
          "pitch": 0.013271187789730021,
          "title": "Engineering Auditorium Atrium",
          "text": "<span style=\"font-size: 16px;\">You can find several spaces around CDE set aside for quiet study or small-group discussions</span>"
        }
      ]
    },
    {
      "id": "2-engineering-auditorium",
      "name": "Engineering Auditorium",
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
      "faceSize": 1440,
      "initialViewParameters": {
        "yaw": 0.009696273622186169,
        "pitch": -0.03362530083333937,
        "fov": 1.4950326062824022
      },
      "linkHotspots": [
        {
          "yaw": 0.13145660314207674,
          "pitch": 0.04577375066478595,
          "rotation": 12.566370614359176,
          "target": "1-engineering-auditorium-atrium"
        },
        {
          "yaw": 3.0178794980968355,
          "pitch": 0.0659784101697376,
          "rotation": 11.780972450961727,
          "target": "0-along-engineering-drive-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.3486371821359864,
          "pitch": -0.09763146128023692,
          "title": "Welcome to the Faculty of Engineering!",
          "text": "Though in 2021, the Faculty of Engineering and School of Design and Environment came together to form the new College of Design and Engineering"
        }
      ]
    }
  ],
  "name": "Faculty of Engineering",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
