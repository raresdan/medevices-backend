import { Request, Response } from 'express';
import { devices } from '../dataStore';

export const getDevices = (req: Request, res: Response) => {
    res.json(devices);
};
