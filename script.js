const outlines = {
  chronology: {
    title: "Medical chronology training guide",
    points: [
      "How to identify date, source, provider, event, and litigation relevance.",
      "How to separate clinical fact from case theory.",
      "How to review AI-generated summaries against source records.",
    ],
  },
  risk: {
    title: "AI adoption risk register",
    points: [
      "Training gaps that lead to inconsistent use.",
      "Trust barriers among attorneys, paralegals, and support teams.",
      "Quality controls for source citation, hallucination risk, and escalation.",
    ],
  },
  kb: {
    title: "Support knowledge base model",
    points: [
      "Task-based guides organized around user intent.",
      "Release notes translated into workflow impact.",
      "Feedback loops from support tickets into reusable enablement content.",
    ],
  },
};

const preview = document.querySelector("#project-preview");

document.querySelectorAll("[data-project]").forEach((button) => {
  button.addEventListener("click", () => {
    const item = outlines[button.dataset.project];
    preview.innerHTML = `
      <strong>${item.title}</strong>
      <ul>${item.points.map((point) => `<li>${point}</li>`).join("")}</ul>
    `;
  });
});
