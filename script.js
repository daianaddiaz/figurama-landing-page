document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-btn");
    const tabPanels = document.querySelectorAll(".tab-panel");

    tabButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const targetId = btn.getAttribute("data-tab");

            tabButtons.forEach((b) => b.classList.remove("active"));
            tabPanels.forEach((panel) => panel.classList.remove("active"));

            btn.classList.add("active");
            document.getElementById(targetId).classList.add("active");
        });
    });
});