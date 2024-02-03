import cors from "cors";
import express, { json, urlencoded, Request, Response } from "express";
import EmployeeController from './controllers/employee.controller';
import RepairsController from './controllers/repairs.controller';
import ShipmentsController from './controllers/shipments.controller';
import TripsController from './controllers/trips.controller';
import VehicleController from './controllers/vehicle.controller';
import VehicleLicenseController from './controllers/vehicleLicense.controller';

const app = express();
app.use(cors());
app.use(json());
app.use(urlencoded());


// //Repairs
// app.post("/repairs", RepairsController.createRepair);
// app.get("/repairs/:id", RepairsController.getRepairById);
// app.get("/repairs", RepairsController.getAllRepairs);
// app.put("/repairs/:id", RepairsController.updateRepair);
// app.delete("/repairs/:id", RepairsController.deleteRepairById);

// //shipments
// app.post("/shipments", ShipmentsController.createShipment);
// app.get("/shipments/:id", ShipmentsController.getShipmentsById);
// app.get("/shipments", ShipmentsController.getAllShipments);
// app.put("/shipments/:id", ShipmentsController.updateShipment);
// app.delete("/shipments/:id", ShipmentsController.deleteShipmentById);


// //trips
// app.post("/trips", TripsController.createTrip);
// app.get("/trips/:id", TripsController.getTripsById);
// app.get("/trips", TripsController.getAllTrips);
// app.put("/trips/:id", TripsController.updateTrip);
// app.delete("/trips/:id", TripsController.deleteTripsById);

// //Vehicle
// app.post("/vehicle", VehicleController.createVehicle);
// app.get("/vehicle/:id", VehicleController.getVehicleById);
// app.get("/vehicle", VehicleController.getAllVehicles);
// app.put("/vehicle/:id", VehicleController.updateVehicle);
// app.delete("/vehicle/:id", VehicleController.deleteVehicleById);


// // //VehicleLicense
// app.post("/vehicleLicense", VehicleLicenseController.createVehicleLicense);
// app.get("/vehicleLicense/:id", VehicleLicenseController.getVehicleLicenseById);
// app.get("/vehicleLicense", VehicleLicenseController.getAllVehicleLicenses);
// app.put("/vehicleLicense/:id", VehicleLicenseController.updateVehicleLicense);
// app.delete("/vehicleLicense/:id", VehicleLicenseController.deleteVehicleLicenseById);



// app.get("/", (_: Request , res: Response) => {
//   return res.send("/index");
// });


export default app;