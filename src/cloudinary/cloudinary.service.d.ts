type CloudinaryUploadResponse = {
    secure_url: string;
    public_id: string;
};
export declare class CloudinaryService {
    uploadImage(file: Express.Multer.File): Promise<CloudinaryUploadResponse>;
}
export {};
