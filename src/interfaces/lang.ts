export type Langs = "en" | "es";

export interface Lang {
  name: string;
  shortname: Langs;
  img: string
}

export interface LangParams {
  params: {
    lang: string;
  }
}