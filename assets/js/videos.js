const loveVideos = ["InShot_20251125_165613732.mp4", "Snapchat-1367954032.mp4", "Snapchat-1846223073.mp4", "Snapchat-1928318854.mp4", "Snapchat-394245119.mp4", "Snapchat-762476692.mp4", "Snapchat-831637246.mp4", "Snapchat-969576326.mp4", "VID20251026144453.mp4", "VID20260330221800.mp4", "WhatsApp Video 2025-08-12 at 7.26.19 PM.mp4", "WhatsApp Video 2025-08-12 at 7.26.23 PM.mp4", "WhatsApp Video 2025-08-12 at 7.26.29 PM.mp4", "WhatsApp Video 2025-08-12 at 7.26.33 PM.mp4", "WhatsApp Video 2025-08-12 at 7.28.06 PM.mp4", "WhatsApp Video 2025-08-12 at 7.28.09 PM.mp4", "WhatsApp Video 2025-08-12 at 7.28.11 PM.mp4", "WhatsApp Video 2025-08-12 at 7.28.17 PM.mp4"];

function initVideos() {
    const grid = document.querySelector('.video-grid');
    if (!grid) return;
    
    grid.innerHTML = ''; // Clear existing
    
    loveVideos.forEach((vid, index) => {
        const card = document.createElement('div');
        card.className = 'video-card';
        
        card.innerHTML = `
            <video controls>
                <source src="assets/videos/${encodeURIComponent(vid)}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <div class="caption" style="font-family: 'Dancing Script', cursive; font-size: 1.2rem;">
                Moment #${index + 1} ❤️
            </div>
        `;
        
        grid.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', initVideos);
