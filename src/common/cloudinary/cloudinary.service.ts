import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Envs } from 'src/config/env.config';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import { Readable } from 'stream';

@Injectable()
export class CloudinaryService {

  constructor(
    configService: ConfigService<Envs>,
  ) {
    // Configura las credenciales de Cloudinary
    cloudinary.config({
      cloud_name: configService.get('CLOUDINARY_CLOUD_NAME'), // Nombre del Cloud
      api_key: configService.get('CLOUDINARY_API_KEY'), // Clave API
      api_secret: configService.get('CLOUDINARY_API_SECRET'), // Secreto API
    });
  }

  async removeAsset(assetPublicId: string) {
    return cloudinary.uploader.destroy(assetPublicId);
  }


  async uploadAsset(file: Express.Multer.File, assetType: 'image' = 'image'): Promise<UploadApiResponse> {
    if (!file) {
      throw new Error('No se proporcionó ningún archivo para subir.');
    }

    return new Promise((resolve, reject) => {
      // Crear un stream legible desde el buffer del archivo
      const stream = cloudinary.uploader.upload_stream(
        {
          // folder: 'your_folder_name', // Cambia a la carpeta deseada en Cloudinary
          resource_type: assetType, // Especifica el tipo de recurso
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      // Pasar el buffer del archivo al stream
      const bufferStream = new Readable();
      bufferStream.push(file.buffer);
      bufferStream.push(null); // Finaliza el stream
      bufferStream.pipe(stream);
    });
  }
}
