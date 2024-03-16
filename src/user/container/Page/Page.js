import React from 'react';

function Page(props) {
    return (
        <div>
            <div>
                
                <div classname="container-fluid page-header py-5">
                    <h1 classname="text-center text-white display-6">404 Error</h1>
                    <ol classname="breadcrumb justify-content-center mb-0">
                        <li classname="breadcrumb-item"><a href="#">Home</a></li>
                        <li classname="breadcrumb-item"><a href="#">Pages</a></li>
                        <li classname="breadcrumb-item active text-white">404</li>
                    </ol>
                </div>
             
                
                <div classname="container-fluid py-5">
                    <div classname="container py-5 text-center">
                        <div classname="row justify-content-center">
                            <div classname="col-lg-6">
                                <i classname="bi bi-exclamation-triangle display-1 text-secondary">
                                    <h1 classname="display-1">404</h1>
                                    <h1 classname="mb-4">Page Not Found</h1>
                                    <p classname="mb-4">We're sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                                    <a classname="btn border-secondary rounded-pill py-3 px-5" href="index.html">Go Back To Home</a>
                                </i></div><i classname="bi bi-exclamation-triangle display-1 text-secondary">
                            </i></div><i classname="bi bi-exclamation-triangle display-1 text-secondary">
                        </i></div><i classname="bi bi-exclamation-triangle display-1 text-secondary">
                    </i></div><i classname="bi bi-exclamation-triangle display-1 text-secondary">
                    {'{'}/* 404 End */{'}'}
                </i></div><i classname="bi bi-exclamation-triangle display-1 text-secondary">
            </i></div>

    );
}

export default Page;