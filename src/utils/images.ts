import { getImage } from 'astro:assets';

type Images = Record<
  string,
  () => Promise<{
    default: ImageMetadata;
  }>
>;

const getOptimizedImage = async (recordImages: Images, imagesRootPath: string, image: string) => {
  const output = await getImage({
    src: recordImages[`${imagesRootPath}/${image}`](),
    format: 'avif',
  }).then((img) => img);

  return output.src;
};

export { getOptimizedImage };
