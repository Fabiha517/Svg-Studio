export function DownloadSvg(svg) {
	const blob = new Blob([svg], {
		type: "image/svg+xml",
	});
  const url=URL.createObjectURL(blob)
  const a=document.createElement("a")
  a.href=url
  a.download="svg-studio.svg"
  a.click()
  URL.revokeObjectURL(url)
}