const cspPolicy = "default-src 'self'; script-src 'self' https://cdn.example.com; style-src 'self' https://fonts.googleapis.com;";
document.addEventListener('DOMContentLoaded', function () {
    document.head.appendChild(Object.assign(document.createElement('meta'), {
        httpEquiv: 'Content-Security-Policy',
        content: cspPolicy,
    }));
});