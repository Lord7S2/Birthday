document.addEventListener("DOMContentLoaded", () => {

    const eventDate = new Date("2026-05-08T20:00:00");
    const countdownEl = document.querySelector(".hero__countdown");

    if (!countdownEl) {
        console.error("Elemento .hero__countdown não existe no HTML");
        return;
    }

    function updateCountdown() {
        const now = new Date();
        const diff = eventDate - now;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        countdownEl.textContent =
            `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
});