function handleRequest(request) {
  return new Response(
    JSON.stringify({
      message: "Hello from Deno Deploy",
    }),
    {
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    }
  );
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request));
});
