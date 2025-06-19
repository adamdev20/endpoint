// Sample blog data
const blogPosts = [
    {
        title: "Memulai Perjalanan Menulis",
        excerpt: "Bagaimana saya memulai kebiasaan menulis dan manfaat yang didapat...",
        date: "15 Juni 2023"
    },
    {
        title: "Belajar Teknologi Terkini",
        excerpt: "Pengalaman belajar teknologi baru dan tips untuk pemula...",
        date: "10 Juni 2023"
    },
    {
        title: "Refleksi Tahun Ini",
        excerpt: "Catatan perjalanan dan pelajaran yang saya dapatkan tahun ini...",
        date: "1 Juni 2023"
    }
];

// Load blog posts
document.addEventListener('DOMContentLoaded', () => {
    const blogContainer = document.getElementById('blogContainer');
    
    blogPosts.forEach(post => {
        const article = document.createElement('article');
        article.className = 'blog-card';
        article.innerHTML = `
            <h3>${post.title}</h3>
            <p class="post-date">${post.date}</p>
            <p>${post.excerpt}</p>
            <a href="#" class="read-more">Baca Selengkapnya →</a>
        `;
        blogContainer.appendChild(article);
    });

    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });
    
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
