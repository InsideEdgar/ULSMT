
const quranWords = [
    { arabic: 'اللَّه', english: 'Allah (The One True God)', tamil: 'அல்லாஹ்' },
    { arabic: 'رَحْمَٰن', english: 'Rahman (The Most Merciful)', tamil: 'அளவற்ற அருளாளன்' },
    { arabic: 'رَحِيم', english: 'Rahim (The Most Compassionate)', tamil: 'நிகரற்ற அன்புடையோன்' },
    { arabic: 'كِتَاب', english: 'Kitab (Book)', tamil: 'புத்தகம்' },
    { arabic: 'قَلَم', english: 'Qalam (Pen)', tamil: 'பேனா' },
    { arabic: 'صَلَاة', english: 'Salat (Prayer)', tamil: 'தொழுகை' },
    { arabic: 'زَكَاة', english: 'Zakat (Charity)', tamil: 'ஜகாத் (தர்மம்)' },
    { arabic: 'صَبْر', english: 'Sabr (Patience)', tamil: 'பொறுமை' },
    { arabic: 'شُكْر', english: 'Shukr (Gratitude)', tamil: 'நன்றி' },
    { arabic: 'عِلْم', english: 'Ilm (Knowledge)', tamil: 'கல்வி' },
    { arabic: 'نُور', english: 'Nur (Light)', tamil: 'ஒளி' },
    { arabic: 'حَقّ', english: 'Haqq (Truth)', tamil: 'உண்மை' },
    { arabic: 'جَنَّة', english: 'Jannah (Paradise)', tamil: 'சொர்க்கம்' },
    { arabic: 'جَهَنَّم', english: 'Jahannam (Hell)', tamil: 'நரகம்' },
    { arabic: 'دُنْيَا', english: 'Dunya (World)', tamil: 'உலகம்' },
    { arabic: 'آخِرَة', english: 'Akhirah (Hereafter)', tamil: 'மறுமை' },
    { arabic: 'إِيمَان', english: 'Iman (Faith)', tamil: 'நம்பிக்கை' },
    { arabic: 'إِسْلَام', english: 'Islam (Submission)', tamil: 'இஸ்லாம்' },
    { arabic: 'إِحْسَان', english: 'Ihsan (Excellence)', tamil: 'அழகுறச் செய்தல்' },
    { arabic: 'تَقْوَى', english: 'Taqwa (Piety)', tamil: 'இறையச்சம்' },
    { arabic: 'هُدًى', english: 'Huda (Guidance)', tamil: 'நேர்வழி' },
    { arabic: 'رَحْمَة', english: 'Rahmah (Mercy)', tamil: 'கருணை' },
    { arabic: 'سَلَام', english: 'Salam (Peace)', tamil: 'சாந்தி' },
    { arabic: 'قَلْب', english: 'Qalb (Heart)', tamil: 'இதயம்' },
    { arabic: 'رُوح', english: 'Ruh (Soul)', tamil: 'ஆன்மா' },
    { arabic: 'مَلَك', english: 'Malak (Angel)', tamil: 'வானவர்' },
    { arabic: 'رَسُول', english: 'Rasul (Messenger)', tamil: 'தூதர்' },
    { arabic: 'نَبِيّ', english: 'Nabi (Prophet)', tamil: 'நபி' },
    { arabic: 'آيَة', english: 'Ayat (Verse)', tamil: 'வசனம்' },
    { arabic: 'سُورَة', english: 'Surah (Chapter)', tamil: 'அத்தியாயம்' }
];
function showFallback(img){
    img.style.display = "none";
    const fallback = img.nextElementSibling;
    if(fallback){
        fallback.style.display = "flex";
    }
}
document.addEventListener('DOMContentLoaded', () => {

    // ==========================
    // NAVBAR
    // ==========================
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // ==========================
    // QURAN WORD WIDGET
    // ==========================
    const wordArabicResult = document.getElementById('word-arabic');
    const wordEnglishResult = document.getElementById('word-english');
    const wordTamilResult = document.getElementById('word-tamil');

    if (wordArabicResult && wordEnglishResult && wordTamilResult) {
        const date = new Date();
        const index = (date.getDate() - 1) % 30;
        const word = quranWords[index];

        wordArabicResult.textContent = word.arabic;
        wordEnglishResult.textContent = word.english;
        wordTamilResult.textContent = word.tamil;
    }

    // ==========================
    // ✅ DYNAMIC GALLERY DATA
    // ==========================
    const galleryData = [
        {
            src: "assets/img/um1.jpg",
            title: "Masjid Exterior",
            category: "masjid",
            desc: "Exterior before Friday prayer"
        },
        {
            src: "assets/img/um2.jpg",
            title: "Youth Conference",
            category: "events",
            desc: "Community event"
        },
        {
            src: "assets/img/masjid_bg.jpg",
            title: "Iftar",
            category: "ramadan",
            desc: "Breaking fast together"
        },
        {
            src: "assets/img/um1.jpg",
            title: "Food Drive",
            category: "community",
            desc: "Helping people"
        }
    ];

    const galleryGrid = document.getElementById('gallery-grid');

    function loadGallery(filter = "all") {
        if (!galleryGrid) return;

        galleryGrid.innerHTML = "";

        galleryData.forEach(item => {
            if (filter === "all" || item.category === filter) {

                const div = document.createElement("div");
                div.className = "gallery-item";

                div.innerHTML = `
                    <img src="${item.src}" alt="${item.title}">
                    <h3>${item.title}</h3>
                `;

                div.addEventListener("click", () => openLightbox(item));

                galleryGrid.appendChild(div);
            }
        });
    }

    // ==========================
    // FILTER BUTTONS
    // ==========================
    const filterBtns = document.querySelectorAll('.filter-btn');

    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {

                document.querySelector('.filter-btn.active')?.classList.remove('active');
                btn.classList.add('active');

                loadGallery(btn.dataset.filter);
            });
        });
    }

    // ==========================
    // LIGHTBOX
    // ==========================
    const lightbox = document.getElementById('lightbox');

    function openLightbox(item) {
        if (!lightbox) return;

        document.getElementById('lightbox-title').textContent = item.title;
        document.getElementById('lightbox-desc').textContent = item.desc;

        document.getElementById('lightbox-image').innerHTML =
            `<img src="${item.src}" style="max-width:90%; border-radius:10px;">`;

        lightbox.classList.add('active');
    }

    if (lightbox) {
        document.getElementById('lightbox-close').onclick = () => {
            lightbox.classList.remove('active');
        };

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
            }
        });
    }

    // ==========================
    // INIT
    // ==========================
    loadGallery();

});
