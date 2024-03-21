import { print } from "pdf-to-printer";

export const PrinterGet = {
  fileToPrint: "./dummy.pdf",
  printerName: "XP-80",
  
  printer(){
    const options = {
      printer: "XP-80",
    };
    
    print(this.fileToPrint, options).then(console.log);
    // console.log(options);
    
  }
}