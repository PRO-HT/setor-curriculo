const models = [
    {
        title: "Currículo Executivo",
        category: "Profissional",
        description: "Modelo estratégico para cargos de liderança, gestores e profissionais com experiência consolidada.",
        details: ["Layout formal e objetivo", "Foco em resultados", "Ideal para cargos executivos"],
        preview: "executive"
    },
    {
        title: "Currículo Moderno",
        category: "Versátil",
        description: "Modelo atual para profissionais de diferentes áreas, com leitura rápida e organização clara.",
        details: ["Visual contemporâneo", "Boa organização visual", "Ideal para o mercado atual"],
        preview: "modern"
    },
    {
        title: "Currículo Criativo",
        category: "Criativo",
        description: "Modelo diferenciado para áreas criativas, comunicação, marketing, design e novas mídias.",
        details: ["Identidade visual marcante", "Destaque para portfólio", "Ideal para áreas criativas"],
        preview: "creative"
    }
];

const resumePreview = (preview) => `
    <div class="resume-mockup ${preview}">
        <div class="resume-header"><strong>Nome do Profissional</strong><span>Área de atuação</span></div>
        <div class="resume-body">
            <aside><b>Contato</b><i></i><i></i><i></i><b>Competências</b><i></i><i></i></aside>
            <div><b>Resumo profissional</b><i></i><i></i><i></i><b>Experiência</b><i></i><i></i><i></i><b>Formação</b><i></i></div>
        </div>
    </div>
`;

const modelsGrid = document.getElementById("models-grid");
modelsGrid.innerHTML = models.map((model, index) => `
    <button class="model-card" type="button" data-model="${index}" aria-label="Ver detalhes do ${model.title}">
        ${resumePreview(model.preview)}
        <span class="model-content">
            <span>${String(index + 1).padStart(2, "0")}</span>
            <span>
                <strong>${model.title}</strong>
                <small>${model.category}</small>
            </span>
            <span class="model-marker">${model.preview === "executive" ? "EXEC" : model.preview === "modern" ? "MOD" : "CRI"}</span>
        </span>
    </button>
`).join("");

const dialog = document.getElementById("model-dialog");
const dialogPreview = document.getElementById("dialog-preview");
const dialogTitle = document.getElementById("dialog-title");
const dialogDescription = document.getElementById("dialog-description");
const dialogDetails = document.getElementById("dialog-details");
const dialogWhatsapp = document.getElementById("dialog-whatsapp");

const openModel = (index) => {
    const model = models[index];
    dialogPreview.innerHTML = resumePreview(model.preview);
    dialogTitle.textContent = model.title;
    dialogDescription.textContent = model.description;
    dialogDetails.innerHTML = model.details.map((detail) => `<li>${detail}</li>`).join("");

    const message = `Olá, gostaria de solicitar o modelo ${model.title}.`;
    dialogWhatsapp.href = `https://wa.me/5551992528304?text=${encodeURIComponent(message)}`;
    dialog.showModal();
};

modelsGrid.querySelectorAll("[data-model]").forEach((card) => {
    card.addEventListener("click", () => openModel(Number(card.dataset.model)));
});

document.querySelector(".dialog-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
});

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");
menuToggle.addEventListener("click", () => {
    const open = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
});
mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});
