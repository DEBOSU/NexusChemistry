document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scroll for "Explore Reactions" button
    const exploreBtn = document.getElementById('explore-btn');
    const reactionSection = document.getElementById('reaction-details');

    exploreBtn.addEventListener('click', () => {
        reactionSection.scrollIntoView({ behavior: 'smooth' });
    });

    // 2. Search Functionality
    const searchInput = document.getElementById('search-input');
    const cards = document.querySelectorAll('.card');

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        
        cards.forEach(card => {
            const text = card.innerText.toLowerCase();
            if (text.includes(searchTerm)) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });

    // 3. Video Placeholder Interaction
    const videoPlaceholder = document.getElementById('video-placeholder');
    
    videoPlaceholder.addEventListener('click', () => {
        // هنا يتم استبدال الـ Placeholder بالفيديو الحقيقي
        // يمكنك وضع كود الـ iframe الخاص بـ YouTube هنا
        videoPlaceholder.innerHTML = `
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen style="border-radius: 15px; position: absolute; top:0; left:0; width:100%; height:100%;"></iframe>
        `;
        videoPlaceholder.style.border = 'none';
        videoPlaceholder.style.padding = '0';
    });

    // 4. Category Card Click (Simulated Action)
    cards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            alert(`You selected: ${category}. (Feature coming soon!)`);
        });
    });

});