 export async function CopySvg(svg){
    await navigator.clipboard.writeText(svg)
    alert("Copied!");
  }