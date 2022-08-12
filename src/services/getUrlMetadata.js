import urlMetadata from 'url-metadata';

export async function getUrlMetadata(req, res, next) {
    try {
        const { url } = req.body;
        const metadata = await urlMetadata(url);
        const filterMetadata = {
            title: metadata.title,
            description: metadata.description,
            image: metadata.image,
        }
        res.locals.filterMetadata = filterMetadata;
        next();
    } catch (err) {
        return res.status(500).send(err);
    }
}