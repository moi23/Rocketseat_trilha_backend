import { Request, Response } from "express";
import CreateCoursesService from "./CreateCoursesService";

export function createCourse(request: Request, response: Response) {
  CreateCoursesService.execute("NodeJS", 10, "Moises");

  return response.send();
}
