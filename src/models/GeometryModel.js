import { geometryEngine } from '@arcgis/core/geometry/geometryEngine.js';
import { Polyline } from '@arcgis/core/geometry/Polyline.js';

class GeometryModel {
  static async intersectPolylines(polyline, bufferDistance = 10) {
    try {
      // Create a buffer around the input polyline
      const buffer = geometryEngine.buffer(polyline, bufferDistance, 'meters');

      // Example second polyline for intersection
      const secondPolyline = new Polyline({
        paths: [
          [[-122.68, 45.51], [-122.67, 45.52], [-122.66, 45.53]]
        ],
        spatialReference: { wkid: 4326 }
      });

      // Perform the intersection
      const intersection = geometryEngine.intersect(buffer, secondPolyline);

      return {
        success: true,
        data: {
          intersection,
          buffer,
          originalPolyline: polyline
        }
      };
    } catch (error) {
      return {
        success: false,
        error: error.message
      };
    }
  }
}

export default GeometryModel;