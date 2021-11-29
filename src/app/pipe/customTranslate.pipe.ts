import {Pipe, PipeTransform} from "@angular/core";
import {LanguageService} from "../services/language.service";

@Pipe({
  name: "customTranslate",
  pure: false
})
export class CustomTranslatePipe implements PipeTransform {
  constructor(private languageService: LanguageService) {
  }

  transform(value: any, arg?: any) {
    if (!value) {
      return;
    }
    if (typeof value !== "string") {
      return value;
    }

    return this.languageService.translate(value, arg);
  }
}
