export default (req, res) => {
    res.status(200).json({ text: 'Hello' })
  }

/*
req is an instance of http.IncomingMessage, plus some pre-built middlewares you can see here.
res is an instance of http.ServerResponse, plus some helper functions you can see here.

https://nextjs.org/docs/api-routes/dynamic-api-routes
*/