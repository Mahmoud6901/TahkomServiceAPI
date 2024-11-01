import GeometryModel from '../models/GeometryModel.js';
import { Polyline } from '@arcgis/core/geometry/Polyline.js';

class GeometryController {
  static async processIntersection(req, res) {
    try {
      const { polylineData } = req.body;

      // Create a Polyline from the input data
      const polyline = new Polyline({
        paths: polylineData.paths,
        spatialReference: polylineData.spatialReference || { wkid: 4326 }
      });

      const result = await GeometryModel.intersectPolylines(polyline);

      if (result.success) {
        res.json(result.data);
      } else {
        res.status(400).json({ error: result.error });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default GeometryController;