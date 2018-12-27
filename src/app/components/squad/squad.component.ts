import { Component, OnInit } from '@angular/core';



import Map from 'ol/Map.js';
import View from 'ol/View.js';
import Projection from 'ol/proj/Projection.js';
import { getCenter } from 'ol/extent.js';
import ImageLayer from 'ol/layer/Image.js';
import Static from 'ol/source/ImageStatic.js';
import Feature from 'ol/Feature.js';
import { Point } from 'ol/geom';
import { Vector as VectorLayer } from 'ol/layer.js';
import VectorSource from 'ol/source/Vector.js';
import { Icon, Style, Stroke } from 'ol/style.js';
import { LineString } from 'ol/geom';


const pitchUrl = 'assets/images/pitch.png';

@Component({
  selector: 'app-squad',
  templateUrl: './squad.component.html',
  styleUrls: ['./squad.component.scss']
})
export class SquadComponent implements OnInit {

  map: Map;
  private view: View;

  constructor() { }

  ngOnInit() {
    var extent = [0, 0, 1024, 968];
    var projection = new Projection({
      code: 'xkcd-image',
      units: 'pixels',
      extent: extent
    });

    let size = [1024, 968]

    let defaultStyle = this.createStyle('assets/images/cards-backgrounds/goldrnif.png', undefined, 0.5);
    let goalkeeper = this.getPlayerLayer(new Point([590, 150]), defaultStyle);
    let goalkeeperFaceStyle = this.createStyle('assets/images/players/190042.png', undefined, 0.4);
    let goalkeeperfaceLayer = this.getPlayerLayer(new Point([590, 150]), goalkeeperFaceStyle);

    let player1 = this.getPlayerLayer(new Point([90, 350]), defaultStyle);
    let player1FaceStyle = this.createStyle('assets/images/players/37576.png', undefined, 0.4);
    let player1FaceLayer = this.getPlayerLayer(new Point([90, 350]), player1FaceStyle);



    var coordinates = [[590, 150], [90, 350]];

    var layerLines = new VectorLayer({
      source: new VectorSource({
        features: [new Feature({
          geometry: new LineString(coordinates),
          name: 'Line',
          style: new Style({
            stroke: new Stroke({
              color: '#22bf27',
              width: 4
            })
          })
        })]
      }),
      style: function (feature) {
        return feature.get('style');
      },
    });

    // map.addLayer(layerLines);



    this.map = new Map({
      layers: [
        new ImageLayer({
          source: new Static({
            url: pitchUrl,
            projection: projection,
            imageExtent: extent,
            imageSize: size
          })
        }),
        layerLines,
        goalkeeper,
        goalkeeperfaceLayer,
        player1,
        player1FaceLayer,
      ],
      controls: [],
      target: 'map',
      view: new View({
        projection: projection,
        center: getCenter(extent),
        zoom: 1,
        maxZoom: 1,
        enableRotation: false
      })
    });
  }
  getPlayerLayer(point: Point, style: Style): VectorLayer {
    let feature = new Feature({
      geometry: point,
      id: 1,
      style: style
    });
    let iconLayer = new VectorLayer({
      style: function (feature) {
        return feature.get('style');
      },
      source: new VectorSource({
        features: [feature]
      })
    });
    return iconLayer;
  }

  createStyle(src, img, scale) {
    console.log('scale', scale)
    // aqui deveria ter uma maneira de pegar o tamanho da imagem
    let newScale = img ? (95 + 144) / (img.width + img.height) : scale;
    console.log('newScale', newScale)

    return new Style({
      image: new Icon(/** @type {module:ol/style/Icon~Options} */({
        // anchor: [0.5, 0.96],
        crossOrigin: 'anonymous',
        src: src,
        img: img,
        imgSize: img ? [img.width, img.height] : undefined,
        scale: scale
      }))
    });
  }

}
