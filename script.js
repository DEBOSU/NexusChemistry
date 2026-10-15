console.log("Script Loaded Successfully!");

// ===== DATABASE (Element | Symbol | Type | Equation | Conditions | Explanation) =====
const DB = `
Chlorine|Cl|synthesis|H₂ + Cl₂ → 2HCl|Sunlight|Chlorine reacts explosively with hydrogen in sunlight.
Chlorine|Cl|oxidation|2Fe + 3Cl₂ → 2FeCl₃|Heat|Iron burns in chlorine to form iron(III) chloride.
Chlorine|Cl|displacement|Cl₂ + 2NaBr → 2NaCl + Br₂|Aqueous|Chlorine displaces bromine from sodium bromide solution.
Chlorine|Cl|hydrolysis|Cl₂ + H₂O → HCl + HOCl|Room temp|Chlorine reacts with water to form hydrochloric and hypochlorous acids.
Chlorine|Cl|displacement|Cl₂ + 2NaI → 2NaCl + I₂|Aqueous|Chlorine displaces iodine from sodium iodide solution.
Chlorine|Cl|oxidation|Cl₂ + SO₂ + 2H₂O → 2HCl + H₂SO₄|Aqueous|Chlorine oxidizes sulfur dioxide to sulfuric acid.
Chlorine|Cl|oxidation|Cl₂ + H₂S → 2HCl + S|Room temp|Chlorine oxidizes hydrogen sulfide to sulfur.
Chlorine|Cl|displacement|Cl₂ + 2KBr → 2KCl + Br₂|Aqueous|Chlorine displaces bromine from potassium bromide solution.
Sodium|Na|combustion|2Na + O₂ → Na₂O₂|Excess O₂|Sodium burns in excess oxygen to form sodium peroxide.
Sodium|Na|displacement|2Na + 2H₂O → 2NaOH + H₂|Room temp|Sodium reacts vigorously with cold water.
Sodium|Na|synthesis|2Na + Cl₂ → 2NaCl|Heat|Sodium burns in chlorine to form table salt.
Sodium|Na|displacement|2Na + H₂SO₄ → Na₂SO₄ + H₂|Dilute acid|Sodium reacts with dilute sulfuric acid.
Sodium|Na|synthesis|2Na + H₂ → 2NaH|Heat|Sodium reacts with hydrogen to form sodium hydride.
Potassium|K|combustion|K + O₂ → KO₂|Excess O₂|Potassium burns to form potassium superoxide.
Potassium|K|displacement|2K + 2H₂O → 2KOH + H₂|Room temp|Potassium reacts violently with cold water.
Potassium|K|displacement|2K + H₂SO₄ → K₂SO₄ + H₂|Dilute acid|Potassium reacts with dilute sulfuric acid.
Potassium|K|synthesis|2K + Br₂ → 2KBr|Room temp|Potassium reacts with bromine to form potassium bromide.
Hydrogen|H|combustion|2H₂ + O₂ → 2H₂O|Ignition|Hydrogen burns in oxygen to form water.
Hydrogen|H|synthesis|H₂ + Cl₂ → 2HCl|Sunlight|Hydrogen reacts explosively with chlorine.
Hydrogen|H|synthesis|3H₂ + N₂ → 2NH₃|High T&P|Hydrogen reacts with nitrogen in the Haber process.
Hydrogen|H|synthesis|H₂ + S → H₂S|Heat|Hydrogen reacts with sulfur to form hydrogen sulfide.
Calcium|Ca|synthesis|2Ca + O₂ → 2CaO|Burning|Calcium burns to form calcium oxide (quicklime).
Calcium|Ca|displacement|Ca + 2H₂O → Ca(OH)₂ + H₂|Room temp|Calcium reacts with cold water to form slaked lime.
Calcium|Ca|neutralization|Ca(OH)₂ + 2HCl → CaCl₂ + 2H₂O|Aqueous|Calcium hydroxide reacts with hydrochloric acid.
Calcium|Ca|displacement|Ca + H₂SO₄ → CaSO₄ + H₂|Dilute acid|Calcium reacts with dilute sulfuric acid.
Iron|Fe|combustion|4Fe + 3O₂ → 2Fe₂O₃|Burning|Iron burns in air to form iron(III) oxide (rust).
Iron|Fe|synthesis|2Fe + 3Cl₂ → 2FeCl₃|Heat|Iron reacts with chlorine to form iron(III) chloride.
Iron|Fe|displacement|Fe + 2HCl → FeCl₂ + H₂|Dilute acid|Iron reacts with dilute HCl.
Iron|Fe|displacement|Fe + CuSO₄ → FeSO₄ + Cu|Aqueous|Iron displaces copper from copper sulfate.
Iron|Fe|synthesis|Fe + S → FeS|Heat|Iron reacts with sulfur to form iron(II) sulfide.
Copper|Cu|oxidation|2Cu + O₂ → 2CuO|Strong heat|Copper forms black copper(II) oxide.
Copper|Cu|synthesis|Cu + Cl₂ → CuCl₂|Heat|Copper reacts with chlorine to form copper(II) chloride.
Copper|Cu|oxidation|3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO + 4H₂O|Dilute HNO₃|Copper reacts with dilute nitric acid.
Copper|Cu|displacement|Cu + 2AgNO₃ → Cu(NO₃)₂ + 2Ag|Aqueous|Copper displaces silver from silver nitrate.
Zinc|Zn|combustion|2Zn + O₂ → 2ZnO|Burning|Zinc burns to form zinc oxide.
Zinc|Zn|synthesis|Zn + Cl₂ → ZnCl₂|Heat|Zinc reacts with chlorine to form zinc chloride.
Zinc|Zn|displacement|Zn + H₂SO₄ → ZnSO₄ + H₂|Dilute acid|Zinc reacts with dilute sulfuric acid.
Zinc|Zn|displacement|Zn + CuSO₄ → ZnSO₄ + Cu|Aqueous|Zinc displaces copper from copper sulfate.
Magnesium|Mg|combustion|2Mg + O₂ → 2MgO|Burning|Magnesium burns with brilliant white light.
Magnesium|Mg|synthesis|Mg + Cl₂ → MgCl₂|Heat|Magnesium reacts with chlorine to form magnesium chloride.
Magnesium|Mg|displacement|Mg + 2HCl → MgCl₂ + H₂|Dilute acid|Magnesium reacts with dilute HCl.
Magnesium|Mg|displacement|Mg + 2H₂O → Mg(OH)₂ + H₂|Hot water|Magnesium reacts with hot water.
Oxygen|O|synthesis|C + O₂ → CO₂|Ignition|Carbon burns in oxygen to form carbon dioxide.
Oxygen|O|combustion|2C + O₂ → 2CO|Limited O₂|Carbon burns in limited oxygen to form carbon monoxide.
Oxygen|O|combustion|S + O₂ → SO₂|Ignition|Sulfur burns with blue flame to form sulfur dioxide.
Oxygen|O|combustion|4P + 5O₂ → 2P₂O₅|Ignition|Phosphorus burns to form phosphorus pentoxide.
Nitrogen|N|synthesis|N₂ + 3H₂ → 2NH₃|High T&P|Nitrogen reacts with hydrogen in the Haber process.
Nitrogen|N|oxidation|N₂ + O₂ → 2NO|Very high T|Nitrogen reacts with oxygen at high temperatures.
Sulfur|S|combustion|S + O₂ → SO₂|Ignition|Sulfur burns with a blue flame.
Sulfur|S|synthesis|S + H₂ → H₂S|Heat|Sulfur reacts with hydrogen to form hydrogen sulfide.
Sulfur|S|synthesis|Fe + S → FeS|Heat|Iron reacts with sulfur to form iron(II) sulfide.
Phosphorus|P|combustion|P₄ + 5O₂ → P₄O₁₀|Ignition|Phosphorus burns in excess oxygen.
Phosphorus|P|combustion|P₄ + 3O₂ → P₄O₆|Limited O₂|Phosphorus burns in limited oxygen.
Hydrochloric Acid|HCl|neutralization|HCl + NaOH → NaCl + H₂O|Aqueous|Classic neutralization reaction.
Sulfuric Acid|H₂SO₄|neutralization|H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O|Aqueous|Sulfuric acid neutralization.
Nitric Acid|HNO₃|neutralization|2HNO₃ + Ca(OH)₂ → Ca(NO₃)₂ + 2H₂O|Aqueous|Nitric acid neutralization.
Barium Chloride|BaCl₂|precipitation|BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl|Aqueous|White precipitate of barium sulfate.
Silver Nitrate|AgNO₃|precipitation|AgNO₃ + KI → AgI + KNO₃|Aqueous|Yellow precipitate of silver iodide.
Lead(II) Nitrate|Pb(NO₃)₂|precipitation|Pb(NO₃)₂ + 2NaCl → PbCl₂ + 2NaNO₃|Aqueous|White precipitate of lead(II) chloride.
Calcium Carbonate|CaCO₃|decomposition|CaCO₃ → CaO + CO₂|Strong heat|Lime kiln reaction.
Hydrogen Peroxide|H₂O₂|decomposition|2H₂O₂ → 2H₂O + O₂|MnO₂ catalyst|Decomposes into water and oxygen.
Potassium Chlorate|KClO₃|decomposition|2KClO₃ → 2KCl + 3O₂|Heat + MnO₂|Laboratory preparation of oxygen.
Water|H₂O|decomposition|2H₂O → 2H₂ + O₂|Electrolysis|Water splits into hydrogen and oxygen.
`.trim();

// Parse database into objects
const reactionsDB = DB.split('\n').map(line => {
    const [element, symbol, type, equation, conditions, explanation] = line.split('|');
    return { element, symbol, type, equation, conditions, explanation };
});

// ===== MAIN APP =====
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const reactionContainer = document.getElementById('reaction-container');
    const resultsTitle = document.getElementById('results-title');
    const resultsSubtitle = document.getElementById('results-subtitle');
    const categoryCards = document.querySelectorAll('.card');
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const closeBtn = document.getElementById('close-btn');

    // Drawer
    menuToggle.addEventListener('click', e => { e.stopPropagation(); navMenu.classList.add('active'); });
    closeBtn.addEventListener('click', () => navMenu.classList.remove('active'));
    document.addEventListener('click', e => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) navMenu.classList.remove('active');
    });
    document.querySelectorAll('.nav-links a').forEach(l => l.addEventListener('click', () => navMenu.classList.remove('active')));

    // Render function
    function renderReactions(reactions, title, subtitle) {
        resultsTitle.innerHTML = title;
        resultsSubtitle.textContent = subtitle;
        reactionContainer.innerHTML = '';
        if (reactions.length === 0) {
            reactionContainer.innerHTML = `<div class="empty-state"><i class="fa-solid fa-magnifying-glass"></i><h3>No Reactions Found</h3><p>Try searching for a different element or category.</p></div>`;
            return;
        }
        reactions.forEach(r => {
            const card = document.createElement('div');
            card.className = 'reaction-card';
            card.innerHTML = `<div class="card-header"><h3>${r.element} (${r.symbol})</h3><span class="badge">${r.type.charAt(0).toUpperCase() + r.type.slice(1)}</span></div><div class="equation-box"><p>${r.equation}</p><p class="conditions">Conditions: ${r.conditions}</p></div><p class="explanation">${r.explanation}</p><span class="reaction-type-tag">${r.type}</span>`;
            reactionContainer.appendChild(card);
        });
    }

    // Search
    searchInput.addEventListener('input', e => {
        const term = e.target.value.toLowerCase().trim();
        if (term === '') {
            reactionContainer.innerHTML = `<div class="empty-state"><i class="fa-solid fa-flask"></i><h3>Start Your Search</h3><p>Type an element name above to see its reactions.</p></div>`;
            resultsTitle.innerHTML = 'Explore <span class="gold-text">Reactions</span>';
            resultsSubtitle.textContent = 'Use the search bar or select a category to get started.';
            return;
        }
        const filtered = reactionsDB.filter(r => r.element.toLowerCase().includes(term) || r.symbol.toLowerCase().includes(term));
        renderReactions(filtered, `Results for "${e.target.value}"`, `Found ${filtered.length} reaction(s).`);
    });

    // Category filter
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            categoryCards.forEach(c => c.style.borderColor = '');
            card.style.borderColor = 'var(--gold-primary)';
            document.getElementById('reaction-details').scrollIntoView({ behavior: 'smooth' });
            const filtered = reactionsDB.filter(r => r.type === category);
            const name = category.charAt(0).toUpperCase() + category.slice(1);
            renderReactions(filtered, `${name} <span class="gold-text">Reactions</span>`, `${filtered.length} reaction(s) found in this category.`);
        });
    });

    // Explore button
    document.getElementById('explore-btn').addEventListener('click', () => {
        document.getElementById('reaction-details').scrollIntoView({ behavior: 'smooth' });
    });
});
// === END OF FILE ===
