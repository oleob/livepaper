import flatCache from "flat-cache";

const cache = flatCache.load("productsCache");

const flatCacheMiddleware = (req, res, next) => {
  const key = "__express__" + req.originalUrl || req.url;
  const cacheContent = cache.getKey(key);
  const timeLimit = new Date();
  timeLimit.setMinutes( timeLimit.getMinutes() - 10 );
  if (cacheContent && timeLimit < new Date(cacheContent.created) && false) {
    res.send(cacheContent.body);
  } else {
    res.sendResponse = res.send;
    res.send = body => {
      const data = {
        created: new Date(),
        body
      };
      cache.setKey(key, data);
      cache.save();
      res.sendResponse(body);
    };
    next();
  }
};

export default flatCacheMiddleware;
