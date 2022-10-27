import React from 'react';

const Blog = () => {
    return (
        <div className='container mx-auto'>
            <p className='text-lg text-white mb-8'> ans:/  Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.</p>
            <p className='text-lg text-white mb-8'> ans:/ i use firebase for authentication and it also has hosting services. yes if i want writing the code develop authentication but it is time consuming for me </p>
            <p className='text-lg text-white mb-8'> ans:/ The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated</p>
            <p className='text-lg text-white mb-8'> ans:/ Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine
                Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
            </p>
        </div>
    );
};

export default Blog;