import enJSON from "../../assets/languages/en.json"
import  plJSON from "../../assets/languages/pl.json"

export enum Languages {
  pl,
  en
}

export class LanguageService {
  currentLanguage: Languages = Languages.pl;

   translate(path: string, arg?: string): string {
     let current: any = this.translationObject(this.currentLanguage);
     path.split('.').forEach((p) => {
       current = current[p];
     });

     let translatedText = current;

     if(!arg) {
       return translatedText
     }

     const placeholderInTranslation = new RegExp("{{([]*)\\w+}}", "g");
     const translatedWithArguments = translatedText.replace(placeholderInTranslation, arg);

     return translatedWithArguments;
   }

   changeLanguage(language: Languages) {
     if(language === this.currentLanguage){
       return
     }

     this.currentLanguage = language;
   }

   private translationObject(language: Languages): any{
     switch (language) {
       case Languages.pl:
         return plJSON;
       case Languages.en:
         return enJSON;
       default:
         return plJSON;
     }
   }
}
