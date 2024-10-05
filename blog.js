async function loadBlogPosts() {
    const posts = ['blogs/beitrag1.md', 'blogs/beitrag2.md'];
    const blogContainer = document.getElementById('blog-posts');
    if (!blogContainer) return;

    for (const post of posts) {
        try {
            const response = await fetch(post);
            const data = await response.text();
            const html = marked(data); 
            const postContainer = document.createElement('div');
            postContainer.innerHTML = html;
            blogContainer.appendChild(postContainer);
        } catch (error) {
            console.error('Fehler beim Laden des Beitrags:', error);
        }
    }
}
document.addEventListener('DOMContentLoaded', loadBlogPosts);
