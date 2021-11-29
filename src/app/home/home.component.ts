import {Component, OnInit} from "@angular/core";
import {Languages, LanguageService} from "../services/language.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  languages: string[] = [];
  languagesEnum = Languages;
  initialLanguage = this.languagesEnum.en;

  constructor( public languageService: LanguageService) {
  }

  setLanguage(language: Languages) {
    this.languageService.changeLanguage(language);
  }
}
