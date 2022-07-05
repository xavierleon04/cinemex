import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';
const ImagenPath = environment.imagen;
@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(img: string, size: string = 'w500'): string {
    if (!img) {
      return './assets/no-image.jpg';
    }
    const imgUrl = `${ImagenPath}/${size}${img}`;
    //console.log(imgUrl);
    return imgUrl;
  }
}
