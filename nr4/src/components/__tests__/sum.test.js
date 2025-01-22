import { execPath } from "process";
import sum from "../sum";

test("sum function should calculate sum ",()=>{
   const result=sum(3,4);
   expect(result).toBe(7); //this line is known as assertion
});