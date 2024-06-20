import fs from 'fs'

export function imageToByteArray(imageFile) {
    return new Promise((resolve, reject)=>{
      fs.readFile(imageFile,(error, data)=>{
        if(error){
          reject(error);
          return;
        } else{
          resolve(data);
        }
      })
    })
}