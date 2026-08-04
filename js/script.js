/**
 * S&D Wedding — honeymoon fund interactions
 * agent: agent_read_org_v1 / agent_graphics_v1
 * date: 2026-08-03
 * review: pending human
 */

const ZELLE_NUMBER = "7063056200";
const DEFAULT_ZELLE_NOTE =
  "Tap Zelle to copy the number for your banking app.";
const COPIED_ZELLE_NOTE =
  "Zelle number copied — paste it in your banking app.";

const zelleButton = document.getElementById("zelle-btn");
const zelleNote = document.getElementById("zelle-note");

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const temporaryInput = document.createElement("textarea");
  temporaryInput.value = text;
  temporaryInput.setAttribute("readonly", "");
  temporaryInput.style.position = "fixed";
  temporaryInput.style.opacity = "0";
  document.body.appendChild(temporaryInput);
  temporaryInput.select();
  const didCopy = document.execCommand("copy");
  document.body.removeChild(temporaryInput);
  return didCopy;
}

function setZelleNote(message, isSuccess) {
  if (!zelleNote) return;
  zelleNote.textContent = message;
  zelleNote.classList.toggle("is-copied", Boolean(isSuccess));
}

async function handleZelleCopy() {
  try {
    const didCopy = await copyTextToClipboard(ZELLE_NUMBER);
    setZelleNote(
      didCopy ? COPIED_ZELLE_NOTE : `Zelle: ${ZELLE_NUMBER}`,
      true
    );
  } catch {
    setZelleNote(`Zelle: ${ZELLE_NUMBER}`, true);
  }

  window.setTimeout(() => {
    setZelleNote(DEFAULT_ZELLE_NOTE, false);
  }, 3200);
}

zelleButton?.addEventListener("click", handleZelleCopy);
