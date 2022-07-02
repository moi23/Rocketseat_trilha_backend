import { Request, Response } from "express";
import CreateCoursesService from "./CreateCoursesService";

export function createCourse(request: Request, response: Response) {
  CreateCoursesService.execute({
    duration: 10,
    educator: "Moisés",
    name: "NodeJS",
  });

  return response.send();
}
