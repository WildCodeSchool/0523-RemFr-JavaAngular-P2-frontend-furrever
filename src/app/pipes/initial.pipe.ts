import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "initial",
})
export class InitialPipe implements PipeTransform {
  transform(value: string): string {
    return value[0].toUpperCase();
  }
}
