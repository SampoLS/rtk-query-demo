export function displayFormOrNot(selector: string, text: string) {
  const form = document.getElementsByClassName(selector)[0] as HTMLFormElement;

  if (text === "yes") form.style.display = "block";
  if (text === "no") form.style.display = "none";
}

export function blurBackgroundOrNot(selector: string, text: string) {
  const box = document.getElementsByClassName(selector)[0] as HTMLElement;

  if (text === "yes") box.style.filter = "blur(5px)";
  if (text === "no") box.style.filter = "initial";
}
