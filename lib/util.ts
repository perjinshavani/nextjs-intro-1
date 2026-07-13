export function strToNr(idStr:string){
      const idNr = Number(idStr);

  // make a check for non valid ids
  if (Number.isNaN(idNr)) {
    return null;
  }

  return idNr;
}