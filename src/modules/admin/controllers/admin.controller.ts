
import { Request, Response, NextFunction } from "express";



export async function login(req: Request, res: Response) {
  try {
    res.status(200).json({ message:"Financial"});
    
  } catch (error) {
    console.log(error);
  }
  }
  