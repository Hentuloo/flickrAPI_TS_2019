import jsonp from "jsonp";

export const fetchJSONP = (url: string, fnName: string, callBack: Function) => {
  jsonp(url, { name: fnName, timeout: 2000 }, callBack);
};
