import { AbstractMarkerCluster } from "../../abstract/abstract-marker-cluster";
import { BaseMarker } from "../../entity/base-marker";
import * as MarkerClusterer from '@google/markerclustererplus';
import { Injectable } from "@angular/core";
import { IPoint } from "../../interfaces/i-point";

@Injectable()
export class GoogleMarkerCluster extends AbstractMarkerCluster {

    googleCluster: MarkerClusterer;

    constructor() {

        super();
    }

    initMarkerCluster(): void {

        let mcOptions = {
            gridSize: 100,
            maxZoom: 19,
            zoomOnClick: true,
            ignoreHidden: false,
            styles: [
                {
                    textColor: 'black',
                    url: './assets/icons_map/icon_pointgroup.png',
                    anchorText: [0, -2],
                    height: 44,
                    width: 44
                }]
        };
        //G:\MapTest-St\stackblitz2\src\assets
        this.googleCluster = new MarkerClusterer.default(this.map.api, [], mcOptions);
    }

    addMarker(marker: BaseMarker, redraw?: boolean): void {

        this.googleCluster.addMarker(marker, redraw);

    }

    addMarkers(markers: Array<BaseMarker>, redraw?: boolean): void {

        this.googleCluster.addMarkers(markers, redraw);
    }

    refreshMarkers(): void {

        this.googleCluster.redraw_();

    }

    removeMarker(marker: BaseMarker) {

        this.googleCluster.removeMarker(marker, false);

    }

    removeMarkers() {

        this.googleCluster.clearMarkers();

    }

    resetViewport(): void {

        this.googleCluster.resetViewport_();
    }

}
